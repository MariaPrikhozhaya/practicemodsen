import styled from 'styled-components';
import { CardMedia, IconButton } from '@mui/material';

export const SCard = styled.div`
  border: 2px solid #c4c4c4;
  border-radius: 6px;
  width: 264px;
  margin-bottom: 15px;
`;

export const SDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SCardMedia = styled(CardMedia)`
  border-radius: 6px;
  height: 80px;
  max-width: 100px;
  margin-right: 10px;
`;

export const SCardHeader = styled.p`
  max-width: 120px;
  font-size: 12px;
  font-weight: 700;
`;

export const SText = styled.p`
  font-size: 10px;
  justify-content: space-between;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SIconButtonFav = styled(IconButton)`
  svg {
    color: #c75e5e;
  }
`;

export const SIconButtonArrow = styled(IconButton)`
  svg {
    color: #373737;
  }
`;

export const SCardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SCardContent = styled.div`
  padding: 10px 10px 0 10px;
`;

export const SText = styled.p`
    font-size: 10px;
    justify-content: space-between;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SIconButtonFav = styled(IconButton)`
    svg {
        color: #C75E5E;
    }
`;

export const SIconButtonArrow = styled(IconButton)`
    svg {
        color: #373737;
    }
`;

export const SCardActions = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SCardContent = styled.div`
    padding: 10px 10px 0 10px;
`;
