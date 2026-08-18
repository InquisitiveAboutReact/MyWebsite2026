const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'visit-data.json');

app.use(cors());
app.use(express.json());

function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { count: 0, visits: [] };
  }

  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (error) {
    return { count: 0, visits: [] };
  }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function getDayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getFingerprint(req) {
  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || 'unknown';
  const userAgent = req.headers['user-agent'] || 'unknown';
  return `${ip}|${userAgent}`;
}

app.post('/api/visits', (req, res) => {
  const data = loadData();
  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || 'unknown';
  const userAgent = req.headers['user-agent'] || 'unknown';
  const clientId = req.body?.clientId || 'unknown';
  const sessionId = req.body?.sessionId || null;
  const fingerprint = getFingerprint(req);
  const today = getDayKey();

  const existingVisit = data.visits.find((visit) => {
    const visitDay = visit.createdAt?.slice(0, 10);
    if (visitDay !== today) {
      return false;
    }

    if (sessionId && visit.sessionId === sessionId) {
      return true;
    }

    if (clientId && clientId !== 'unknown' && visit.clientId === clientId) {
      return true;
    }

    if (visit.fingerprint === fingerprint) {
      return true;
    }

    return false;
  });

  const duplicateReason = existingVisit
    ? (sessionId && existingVisit.sessionId === sessionId
      ? 'sessionId'
      : (clientId && clientId !== 'unknown' && existingVisit.clientId === clientId)
        ? 'clientId'
        : 'fingerprint')
    : null;

  if (duplicateReason) {
    console.log('[visit-duplicate]', {
      duplicateReason,
      today,
      sessionId,
      clientId,
      fingerprint,
      ip,
      userAgent,
      existingVisitId: existingVisit?.id || null,
      existingVisitCreatedAt: existingVisit?.createdAt || null,
    });

    return res.json({
      count: data.count,
      visit: existingVisit || data.visits[data.visits.length - 1],
      duplicate: true,
      duplicateReason,
    });
  }

  const visit = {
    id: Date.now(),
    clientId,
    sessionId,
    fingerprint,
    ip,
    userAgent,
    browser: userAgent.includes('Edg') ? 'Edge' : userAgent.includes('Firefox') ? 'Firefox' : userAgent.includes('Chrome') ? 'Chrome' : 'Other',
    createdAt: new Date().toISOString(),
  };

  data.count += 1;
  data.visits.push(visit);
  saveData(data);

  res.json({ count: data.count, visit });
});

app.get('/api/visits', (req, res) => {
  res.json(loadData());
});

app.get('/api/visits/ips', (req, res) => {
  const data = loadData();
  const summary = data.visits.reduce((acc, visit) => {
    if (!acc[visit.ip]) {
      acc[visit.ip] = 0;
    }
    acc[visit.ip] += 1;
    return acc;
  }, {});

  res.json(summary);
});

app.listen(PORT, () => {
  console.log(`Analytics server listening on http://localhost:${PORT}`);
});
