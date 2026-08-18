import { render, screen } from '@testing-library/react';
import ProfileVisit from './ProfileVisit';

describe('ProfileVisit', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ count: 43, visit: { id: 1 } }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ count: 43 }),
      });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('registers a visit and then shows the latest count from the analytics service', async () => {
    render(<ProfileVisit />);

    expect(await screen.findByText('Total Visits: 43')).toBeTruthy();
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/visits',
      expect.objectContaining({ method: 'POST' })
    );
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/visits',
      expect.objectContaining({ method: 'GET' })
    );
  });
});
