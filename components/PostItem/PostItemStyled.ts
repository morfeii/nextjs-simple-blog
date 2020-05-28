import styled from 'styled-components';

export const Article = styled.article`
  flex: 30%;
  background-color: white;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.5);

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 20px;
  width: 130px;
  height: 40px;
  background: #ff7f6c;
  border-radius: 64px;
  text-align: center;
  color: #fff;
  font-family: poppins, sans-serif;
  font-size: 15px;
  line-height: 40px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 300ms linear;
  &:focus {
  background-color: #e92222;
  }
  &:hover {
  background: #e92222;
}`;

export const H2 = styled.h2`
  font-family: poppins, sans-serif;
`;

export const P = styled.p`
  font-family: poppins, sans-serif;
`;
