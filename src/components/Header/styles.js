import styled, { css } from 'styled-components';
import { FiSun, FiMoon, FiLogOut, FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background: ${(props) => props.theme.colors.topBar};
  height: 100px;
  margin-bottom: 30px;
  h1 {
    color: ${(props) => props.theme.colors.color};
  }
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;

    .profile {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;
      outline: none;
      cursor: pointer;

      div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: flex-end;

        p {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          color: ${(props) => props.theme.colors.color};
        }

        span {
          color: gray;
        }
      }
      img {
        width: 50px;
        height: 50px;

        margin: 0 12px 0 14px;

        border-radius: 50%;
      }

      &:hover {
        background: ${(props) => props.theme.colors.outline};
        border-radius: 2px;
        padding: 8px 0px;
      }
    }

    > .line {
      width: 1px;
      height: 64px;
      background: ${(props) => props.theme.colors.outline};
      margin-right: 24px;
      margin-left: 24px;
    }

    > .sign-out,
    .toggle-theme {
      border: none;
      background: transparent;
      cursor: pointer;
      outline: none;
    }
    .sign-out {
      margin-left: 24px;
    }
  }
`;

const iconCSS = css`
  margin: 0 auto;
  font-size: 24px;
  color: #c9ced6;
`;

export const IconSun = styled(FiSun)`
  margin-left: 5px;
  ${iconCSS}
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
export const IconMoon = styled(FiMoon)`
  ${iconCSS}
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const IconSignOut = styled(FiLogOut)`
  ${iconCSS}
  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;

export const IconChevronDown = styled(FiChevronDown)`
  ${iconCSS}
`;
