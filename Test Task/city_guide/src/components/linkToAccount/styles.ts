import styled from "styled-components";
import { Link } from "react-router-dom";


export const SAvatar = styled.div`
//   position: relative;
//   display: inline-block;
  position: absolute;
  bottom: 50px; 
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
`;


export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${props => props.show ? 'block' : 'none'};
`;

export const DropdownItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const SLink = styled(Link)`
    display: block;
    padding: 2px 16px;
    text-decoration: none;
    color: #333;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

