import styled from "styled-components";
import { CardMedia, IconButton } from '@mui/material';

export const SCard = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 320px;
`;

export const SA = styled.a`
    display: block; 
    wordBreak: break-all;
    textOverflow: ellipsis;
    whiteSpace: nowrap; 
    overflow: hidden;
`;