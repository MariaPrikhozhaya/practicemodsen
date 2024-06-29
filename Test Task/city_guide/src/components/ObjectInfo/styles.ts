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


export const SButtonFav = styled.button`
    padding: 7px 14px;
    font-size: 14px;
    background: #C75E5E;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
`;

export const SButtonRoute = styled.button`
    padding: 7px 14px;
    font-size: 14px;
    background: #5E7BC7;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
`;