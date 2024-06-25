import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


export const SCard = styled(Card)`
  border: 1px solid #ccc;
  border-radius: 24px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const SCardHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
`;

export const SCardContent = styled.p`
  margin: 0;
  line-height: 1.6;
`;

export const SCardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;