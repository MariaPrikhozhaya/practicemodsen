import styled from "styled-components";


export const SSearch = styled.div`
    background: rgba(250,250,250,.3);
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    height: 40px;
    input {
        border-radius: 6px;
        padding: 0 16px;
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;

export const SSearchIcon = styled.div`
    letter-spacing: inherit;
    padding: 12px 12px 12px 26px;
    display: flex;
    cursor: pointer;
    color: #8c8c8c;
`;

export const SButtonSearch = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${ props => (!props.open ? `#5E7BC7` : `#fff`)};
    color: ${ props => (!props.open ? `#fff` : `#5E7BC7`)};
    border: ${ props => (!props.open ? `2px solid #5E7BC7` : `2px solid #C4C4C4`)};
    margin-bottom: 15px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center; 
`;


export const SButtonFav = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${ props => (!props.open ? `#C75E5E` : `#fff`)};
    color: ${ props => (!props.open ? `#fff` : `#C75E5E`)};
    border: ${ props => (!props.open ? `2px solid #C75E5E` : `2px solid #C4C4C4`)};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const SCards = styled.div`
    overflow-y: auto; /* Включаем прокрутку по вертикали */
    scrollbar-width: none; /* Скрываем полосу прокрутки */
    height: 560px;
`;

