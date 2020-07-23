import React from 'react';

import { Container } from './styles';

function Button({ color, type, children }) {
  return (
    <Container type={type} color={color}>
      {children}
    </Container>
  );
}

export default Button;
