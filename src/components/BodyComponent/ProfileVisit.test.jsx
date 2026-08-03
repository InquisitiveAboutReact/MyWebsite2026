import { render, screen } from '@testing-library/react';
import ProfileVisit from './ProfileVisit';

describe('ProfileVisit', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ value: 42 }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('shows the remote visit count from the counter service', async () => {
    render(<ProfileVisit />);

    expect(await screen.findByText('Total Visits: 42')).toBeTruthy();
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.countapi.xyz/hit/inquisitiveaboutreact/portfolio2026'
    );
  });
});
