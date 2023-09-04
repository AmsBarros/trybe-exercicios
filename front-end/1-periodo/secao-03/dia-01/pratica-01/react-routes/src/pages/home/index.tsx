import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/coffees');
  }

  return (
    <>
      <h1>Coffeeteria</h1>
      <button onClick={ handleClick }>Conheça nossos produtos</button>
    </>
  );
}

export default Home;

/*
A mesma coisa de cima. Desta forma não é semanticamente correta, apesar de funcionar, pq cria dois elementos clicáveis, um dentro do outro. E com o Hook useNavigate é possível fazer validações
<h1>Coffeeteria</h1>
      <Link to="/coffees">
        <button>Conheça nossos produtos</button>
      </Link>
*/

/* Exemplo de página de login que direciona pra Home, caso login passe pela verificação e esteja OK

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login-form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    setEmail(target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    setPassword(target.value);
  }

  function validateLogin() {
    const regex = /\S+@\S+\.\S+/i;
    if (regex.test(email) && password.length > 5) return true;
    return false;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validate = validateLogin();

    if (validate) {
      navigate('/tasks');
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs-container">
        <label htmlFor="login">
          E-mail
          <input
            id="login"
            value={email}
            onChange={handleEmail}
            required
            placeholder="carol@trybe.com"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            required
          />
        </label>
        {error && (
          <div className="error-msg">
            <p>E-mail inválido ou senha com menos de 6 caracteres</p>
          </div>
        )}
      </div>
      <button>Enviar</button>
    </form>
  );
}

export default LoginForm;

*/
