import styled, { css } from 'styled-components';
const primary = css`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
`;
const secondary = css`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.secondary};
`;
const success = css`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.success};
`;
const danger = css`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.danger};
`;
const warning = css`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.warning};
`;
const info = css`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.info};
`;
const light = css`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.light};
`;
const dark = css`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.dark};
`;
const link = css`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.link};
`;

export const Container = styled.button`
  font-size: 16px;
  padding: 13px 20px;
  border: none;
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
  ${(props) => props.color === 'primary' && primary}
  ${(props) => props.color === 'secondary' && secondary}
  ${(props) => props.color === 'success' && success}
  ${(props) => props.color === 'danger' && danger}
  ${(props) => props.color === 'warning' && warning}
  ${(props) => props.color === 'info' && info}
  ${(props) => props.color === 'light' && light}
  ${(props) => props.color === 'dark' && dark}
  ${(props) => props.color === 'link' && link}

  &:hover {
    filter: brightness(90%);
  }
`;
