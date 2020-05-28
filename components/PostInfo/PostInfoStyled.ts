import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  background: #008aff;
`;

export const A = styled.a`
  position: relative;
  margin: 20px auto;
  padding-bottom: 8px;
  text-decoration: none;
  outline: none;
  text-transform: uppercase;
  color: #fff;
  font-family: poppins, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  transition: color 300ms linear;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    border-radius: 4px;
    background-color: #ff9c8e;
    width: 0;
    transition: width 0.1s linear;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  &:focus:after {
    width: 100%;
    left: 0;
  }
`;

export const Section = styled.section`
  padding: 35px 90px;
`;

export const Article = styled.article`
  background-color: white;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 47.8%, 0.5);
`;

export const H1 = styled.h1`
  font-family: poppins, sans-serif;
`;

export const Input = styled.input`
  width: 50%;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  font-family: poppins, sans-serif;
  font-size: 15px;
  line-height: 20px;
  color: #000;
  margin-bottom: 26px;
  margin-top: 10px;
  transition: border-bottom 200ms linear;
  &:focus,
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

export const Textarea = styled.textarea`
  width: 50%;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  font-family: poppins, sans-serif;
  font-size: 15px;
  border: 1px solid #000;
  outline: none;
  resize: none;
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
`;

export const P = styled.p`
  font-family: poppins, sans-serif;
`;


export const DivUpdate = styled.div`
  text-align: center;
`;

export const H3 = styled.h3`
  font-family: poppins, sans-serif;
`;

export const CommentsArticle = styled.article`
  background-color: white;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 47.8%, 0.5);
`;

export const DivComments = styled.div`
  margin-left: 10px;
`;

export const H2 = styled.h2`
  font-family: poppins, sans-serif;
`;
