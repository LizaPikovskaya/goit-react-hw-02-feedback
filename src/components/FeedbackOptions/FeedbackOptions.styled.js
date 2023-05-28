import styled from 'styled-components';
export const List = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Button = styled.button`
  padding: 10px;
  min-width: 80px;
  border-radius: 5px;
  border: none;
  background-color: #4682b4;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 300ms linear;
  color: white;
  &:hover {
    background-color: #4169e1;
  }
`;
