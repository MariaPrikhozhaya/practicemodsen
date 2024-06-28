import styled from "styled-components";
import { Link } from "react-router-dom"
import { MdArrowBack } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const SField = styled(Field)`
  width: 94%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &.form-control {
    background-color: #fff;
    box-shadow: none;
  }
  &.error {
    border-color: red;
  }
  &.valid {
    border-color: green;
  }
`;

export const SErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;



export const SBlock = styled.div`
  display: flex; 
  flex-direction: column;
`;

export const SButton = styled.button`
  width: 100%;
  margin: 20px 0;
  padding: 15px;
  border: none;
  font-size: 20px;
  background: #5E7BC7;
  color: #fff;
  &:hover {
    background: #6176ab;
    cursor: pointer;
  }
`;

export const SForm = styled.form`
  width: 320px;
  padding: 30px;
  text-align: center;
  background: #fff;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
`;

export const STitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;


export const SMainBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ebf3fc;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const SText = styled.text`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const SLink = styled(Link)`
  color: #000;
`;

export const SRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const SMdArrowBack = styled(MdArrowBack)`
  margin-right: 90px;
  font-size: 30px;
  font-weight: 400;
`;