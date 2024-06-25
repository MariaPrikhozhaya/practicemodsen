import { Sidebar } from 'flowbite-react';
import React, { useState, useContext } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import {
  SSearch, SSearchIcon, SButtonSearch, SButtonFav
} from "./styles";
import { IoMdArrowDropleft, IoMdBookmark } from "react-icons/io";
import { AppContext } from "../Provider";
import LinkAccount from '../LinkToAccount';
import CategoryList from '../ListOfCategories';
import logo from '@assets/logo.png';
import Card from '../Card';


function SideBarF() {
  const [isSidebarOpenSearch, setIsSidebarOpenSearch] = useState(false);
  const [isSidebarOpenFav, setIsSidebarOpenFav] = useState(false);

  const handleOpenSidebarSearch = () => {
    if (isSidebarOpenFav) {
      setIsSidebarOpenFav(false);
    }
    setIsSidebarOpenSearch(true);
  };

  const handleOpenSidebarFav = () => {
    if (isSidebarOpenSearch) {
      setIsSidebarOpenSearch(false);
    }
    setIsSidebarOpenFav(true);
  };

  const handleCloseSidebar = () => {
    if(isSidebarOpenSearch) {
      setIsSidebarOpenSearch(false);
    }
    if(isSidebarOpenFav) {
      setIsSidebarOpenFav(false);
    }
  };

  // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
  const { searchAddress, setSearchAddress } = useContext(AppContext);
  // @ts-expect-error TS(2339): Property 'radius' does not exist on type '{}'.
  const { radius, setRadius } = useContext(AppContext);

  
  // Function to handle search input change
  const handleInputChange = (e) => {
    setSearchAddress(e.target.value);
    console.log(searchAddress);
  };

  const handleInputRadius = (e) => {
    if (e.key === "-" || e.key === "+") {
      e.preventDefault(); // Предотвращает ввод знаков "-" и "+"
    }
    setRadius(e.target.value);
  };

  const handleButtonClick = (e) => {
    
  };

  return (
    <div className="app">

      <Sidebar className="sidebar-1">
        <Sidebar.Logo className="logo" href="/" img={logo} imgAlt="logo"></Sidebar.Logo>
        <div className='icons'>

          <SButtonSearch onClick={handleOpenSidebarSearch} open={isSidebarOpenSearch}>
            <HiMiniMagnifyingGlass />
          </SButtonSearch>
          
          <SButtonFav className='icon_cont fav' onClick={handleOpenSidebarFav} open={isSidebarOpenFav}>
            <IoMdBookmark />
          </SButtonFav>

        </div>

        <LinkAccount />

      </Sidebar>

    
      <div className={`sidebar-2 ${isSidebarOpenSearch ? 'open' : ''}`}>
        <div className="inside">
          <SSearch>
            <SSearchIcon>
              <HiMiniMagnifyingGlass />
            </SSearchIcon>
            <input type="text" placeholder="Место, адрес.." value={searchAddress} onChange={handleInputChange}/>
          </SSearch>
          <p className="text_find">Искать</p>
          
          <CategoryList />
          
          <p className="text_radius">В радиусе</p>
          <input className="input_radius" id="number" 
          type="number" value={radius} onChange={handleInputRadius} min={0}/> <text className="text_km">км</text>
          <button className="find_btn" onClick={handleButtonClick}>
            <HiMiniMagnifyingGlass />
          </button>
        </div>

        <button className="btn_close" onClick={handleCloseSidebar}> 
          <IoMdArrowDropleft />
        </button>
      </div>



      <div className={`sidebar-3 ${isSidebarOpenFav ? 'open' : ''}`}>
        <div className="inside">
          <SSearch>
          <SSearchIcon>
            <HiMiniMagnifyingGlass />
          </SSearchIcon>
          <input type="text" placeholder="Место, адрес.." value={searchAddress} onChange={handleInputChange}/>
        </SSearch>
        <p className="text_search">Избранное:</p>
          <div>
            <Card />
      </div>
        </div>

        <button className="btn_close" onClick={handleCloseSidebar}>
          <IoMdArrowDropleft />
        </button>
      </div>

            

    </div>
  );
}

export default SideBarF;