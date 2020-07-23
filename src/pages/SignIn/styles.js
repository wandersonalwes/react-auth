import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};

  .title {
    margin-bottom: 24px;
    color: ${(props) => props.theme.colors.color};
  }

  form {
    width: 100%;
    max-width: 320px;
    padding: 24px 32px 32px 32px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;

    .message-error {
      padding: 8px 16px;
      background: ${(props) => props.theme.colors.danger};
      margin-bottom: 16px;
      border-radius: 2px;

      p {
        color: #fff;
      }
    }

    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      label {
        margin-bottom: 8px;
      }

      input {
        font-size: 16px;
        font-weight: 300;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        padding: 12px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        outline: none;

        &:focus {
          border: 1px solid ${(props) => props.theme.colors.primary};
          border-radius: 2px;
        }
      }
    }
    button {
      width: 100%;
    }
  }

  > p {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
`;
