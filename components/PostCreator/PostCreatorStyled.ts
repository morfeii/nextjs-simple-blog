import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
`;

export const Form = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const P = styled.p`
  color: #ff1500;
  font-size: 35px;
  font-family: poppins, sans-serif;
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 18px;
  font-family: poppins, sans-serif;
`;

export const Label = styled.label`
  margin: 0;
  padding: 15px 0;
  font-family: poppins, sans-serif;
`;

export const Input = styled.input`
  width: 70%;
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
  width: 70%;
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
