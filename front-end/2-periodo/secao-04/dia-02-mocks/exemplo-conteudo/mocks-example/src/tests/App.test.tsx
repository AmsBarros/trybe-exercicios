import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando fetch', async () => {
  afterEach(() => vi.clearAllMocks());

  it('fetches a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE);

    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

    const MOCK_JOKE_2 = {
      id: '8s5bGtrOfxc',
      joke: 'Whats red and bad for your teeth? A Brick.',
    };

    const MOCK_RESPONSE_2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE_2,
    } as Response;

    const secondMockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE_2);

    const newJokeButton = screen.getByRole('button', { name: 'New joke' });
    await userEvent.click(newJokeButton);

    const secondRenderedJoke = await screen.findByText('Whats red and bad for your teeth? A Brick.');
    expect(secondRenderedJoke).toBeInTheDocument();
    expect(secondMockFetch).toHaveBeenCalledTimes(1);
  });
});
