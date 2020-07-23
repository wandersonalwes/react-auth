import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 30vw;
  background: ${(props) => props.theme.colors.article};
  margin-bottom: 15px;
`;
