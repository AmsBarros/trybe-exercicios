import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import About from '../pages/About';
// import { BrowserRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

it('Renderiza o texto utilizando wrapper', () => {
  // render(<App />, { wrapper: BrowserRouter });
  renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Navega para página About', async () => {
  // render(<App />, { wrapper: BrowserRouter });
  const { user } = renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  // await userEvent.click(aboutLink);
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Renderiza o componente About', () => {
  // render(<About />, { wrapper: BrowserRouter });
  renderWithRouter(<About />);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Renderiza diretamente na rota /about', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});
