import styled from "styled-components";

// import { btnReset, v } from "../../styles/variables";

// export const SSidebar = styled.div`
//     width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
//     background: ${({ theme }) => theme.bg};
//     height: 100vh;
//     padding: ${v.lgSpacing};

//     position: relative;
//     box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
//     display: 'flex'; 
//     overflow: 'scroll initial';

// `;

// export const SSidebarButton = styled.button`
//     ${btnReset};
//     position: absolute;
//     top: ${v.xxlSpacing};
//     right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//     background: ${({ theme }) => theme.bg};
//     box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;

//     transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
// `;

// export const SLogo = styled.div`
//     width: 52px;

//     img {
//         max-width: 100%;
//         height: auto;
//     }
//     cursor: pointer;

//     margin-bottom: ${v.lgSpacing};
// `;



// export const SSidebarButton = styled.button`
//     position: absolute;
//     right: 500px;
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//     background: #fff
//     box-shadow: 0 0 4px 0, ;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;

//     transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
// `;



export const SSearch = styled.div`
    background: rgba(250,250,250,.3);
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    input {
        border-radius: 6px;
        padding: 0 16px;
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 240px;
        height: 40px;
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
    border: 3px solid #5E7BC7;
    // background-color: #5E7BC7;
    cursor: pointer;
    // background-color: ${({isSidebarOpenSearch }) => (!isSidebarOpenSearch ? `#5E7BC7` : `#fff`)};
    // color: ${({isSidebarOpenSearch}) => (!isSidebarOpenSearch ? `#fff` : `#5E7BC7`)};
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
    border: 3px solid #C75E5E;
    // background-color: #C75E5E;
    cursor: pointer;
    // background-color: ${({isSidebarOpenFav }) => (!isSidebarOpenFav ? `#C75E5E` : `#fff`)};
    // color: ${({isSidebarOpenFav}) => (!isSidebarOpenFav ? `#fff` : `#C75E5E`)};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center; 
`;



// export const SDivider = styled.div`
//     height: 1px;
//     width: 100%;
//     background: ${({ theme }) => theme.bg3};
//     margin: ${v.lgSpacing} 0;
// `;

// export const SLinkContainer = styled.div`
//     background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
//     border-radius: ${v.borderRadius};
//     margin: 8px 0;

//     :hover {
//         box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
//     }
// `;

// export const SLink = styled(Link)`
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     color: inherit;
//     font-size: 16px;
//     padding: calc(${v.smSpacing} - 2px) 0;
// `;

// export const SLinkIcon = styled.div`
//     padding: ${v.smSpacing} ${v.mdSpacing};
//     display: flex;

//     svg {
//         font-size: 20px;
//     }
// `;

// export const SLinkLabel = styled.span`
//     display: block;
//     flex: 1;
//     margin-left: ${v.smSpacing};
// `;

// export const SLinkNotification = styled.div`
//     font-size: 14px;
//     padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
//     border-radius: calc(${v.borderRadius} / 2);
//     background: ${({ theme }) => theme.primary};
//     color: white;

//     margin-right: ${v.mdSpacing};
// `;

// export const STheme = styled.div`
//     display: flex;
//     align-items: center;
//     font-size: 16px;
// `;
// export const SThemeLabel = styled.span`
//     display: block;
//     flex: 1;
// `;
// export const SThemeToggler = styled.button`
//     ${btnReset};
//     margin: 0 auto;
//     cursor: pointer;
//     width: 36px;
//     height: 20px;
//     border-radius: 10px;
//     background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};

//     position: relative;
// `;

// export const SToggleThumb = styled.div`
//     height: 18px;
//     width: 18px;
//     position: absolute;
//     top: 1px;
//     bottom: 1px;
//     transition: 0.2s ease right;
//     right: calc(100% - 18px - 1px);
//     border-radius: 50%;
//     background: ${({ theme }) => theme.bg};
// `;