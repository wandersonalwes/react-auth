import React from 'react';
import { useTheme, useAuth } from '../../hooks';

import {
  Container,
  IconMoon,
  IconSun,
  IconSignOut,
  IconChevronDown,
} from './styles';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { signOut, user } = useAuth();

  const handleSignOut = () => signOut();
  return (
    <Container>
      <h1>Dashboard</h1>

      <div className="btn-group">
        <button className="profile">
          <div>
            <p>{user.name}</p>
            <span>Admin</span>
          </div>
          <img
            src="https://i.pinimg.com/236x/7d/9a/78/7d9a78ce43db96eb2a63b3213083f0b2.jpg"
            alt=""
          />

          <IconChevronDown />
        </button>
        <div className="line"></div>
        <button onClick={toggleTheme} className="toggle-theme">
          {theme.title === 'dark' ? <IconSun /> : <IconMoon />}
        </button>
        <button className="sign-out" onClick={handleSignOut}>
          <IconSignOut />
        </button>
      </div>
    </Container>
  );
}
