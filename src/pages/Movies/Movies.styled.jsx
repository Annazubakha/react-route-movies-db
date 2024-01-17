import styled from '@emotion/styled';

export const MoviesSearchWrapper = styled.div`
  padding: 30px;
  background-color: #99b699;
  color: white;
  height: 80vh;
  & form {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  & input {
    border-radius: 8px;
    border: 2px solid #032010;
    height: 25px;
    outline: none;
  }
  & button {
    border-radius: 8px;
    border: 2px solid #032010;
    height: 29.91px;
  }
  & button:hover {
    background-color: #306e07;
    color: white;
  }
  & li {
    font-size: 18px;
    float: left;
    clear: left;
  }
  & li:hover {
    color: #306e07;
  }
`;
