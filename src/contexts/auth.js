import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext({
  signed: false,
  user: {},
  signIn: () => {},
  signOut: () => {},
  loading: true,
  error: null,
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@Auth:user');
      const storageToken = localStorage.getItem('@Auth:token');

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email, password) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      setUser(response.data.user);

      setError(response.status);

      api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

      localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
      localStorage.setItem('@Auth:token', response.data.token);

      return;
    } catch (error) {
      if (error.response.data.error === 'Password does not match!') {
        setError('Senha não corresponde!');
      }
      if (error.response.data.error === 'User not found') {
        setError('Usuário não encontrado');
      }
    }
  }

  const signOut = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('@Auth:user');
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
