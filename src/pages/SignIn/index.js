import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks';

import { Container } from './styles';

function SignIn() {
  const { signIn, error } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignIn = (e) => {
    e.preventDefault();

    return signIn(email, password);
  };

  return (
    <Container>
      <h1 className="title">Login</h1>

      <form onSubmit={handleSignIn}>
        {error ? (
          <div className="message-error">
            <p>{error}</p>
          </div>
        ) : null}
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="username@dominio.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button color="primary" type="submit">
          Entrar
        </Button>
      </form>
      <p>&copy; 2020 meusite.com. Todos os direitos reservados.</p>
    </Container>
  );
}

export default SignIn;
