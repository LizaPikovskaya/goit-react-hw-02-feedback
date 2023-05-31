import styled from 'styled-components';

export const Container = styled.section`
  padding: 0px 60px;
  width: 600px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 700;
`;
