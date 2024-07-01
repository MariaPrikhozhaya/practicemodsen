import { Sidebar } from 'flowbite-react';
import React, { useState, useContext, useEffect } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import {
  SSearch, SSearchIcon, SButtonSearch, SButtonFav, SCards
} from "./styles";
import { IoMdArrowDropleft, IoMdBookmark } from "react-icons/io";
import LinkAccount from '../LinkToAccount';
import CategoryList from '../ListOfCategories';
import logo from '@assets/logo.png';
import Card from '../Card';
import InfoCard from '../InfoCard';
import { useAppDispatch } from '../../hooks/redux';
import { setRadius, setSearchAddress } from '../../store/reducers/geoObjects';
import { FavCollectionRef } from '../../firebase';
import { getDocs } from "@firebase/firestore"

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
    console.log(favorites);
  };

  const handleCloseSidebar = () => {
    if(isSidebarOpenSearch) {
      setIsSidebarOpenSearch(false);
    }
    if(isSidebarOpenFav) {
      setIsSidebarOpenFav(false);
    }
  };


  const [radiusInput, setRadiusInput] = useState<number>(0)
  const [addressInput, setAddressInput] = useState<string>()
  const dispatch = useAppDispatch()


  useEffect(() => {
    console.log(setRadius(radiusInput));
      dispatch(setRadius(radiusInput))
  }, [radiusInput])

  useEffect(() => {
    console.log(setSearchAddress(addressInput));
      dispatch(setSearchAddress(addressInput))
  }, [addressInput])
  

  const handleInputRadius = (e) => {
    if (e.key === "-" || e.key === "+") {
      e.preventDefault(); // Предотвращает ввод знаков "-" и "+"
    }
    setRadiusInput(Number(e.target.value));
  };

  // Function to handle search input change
  const handleInputChange = (e) => {
    setAddressInput(e.target.value);
  };

  const handleButtonClick = (e) => {
  };

  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const getFavorites = async () => {
      const data = await getDocs(FavCollectionRef);
      setFavorites(data.docs.map((elem) => ({...elem.data(), id: elem.id})));
    }

    getFavorites();
  }, [])


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
            <input type="text" placeholder="Место, адрес.." value={addressInput} onChange={handleInputChange}/>
          </SSearch>
          <p className="text_find">Искать</p>
          
          <CategoryList />
          
          <p className="text_radius">В радиусе</p>
          <input className="input_radius" id="number" 
          type="number" value={radiusInput} onChange={handleInputRadius} min={0}/> <text className="text_km">км</text>
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
          <input type="text" placeholder="Место, адрес.." value={addressInput} onChange={handleInputChange}/>
        </SSearch>
        <p className="text_search">Избранное:</p>
          <SCards>
          {favorites.map((item) => (
              <Card key={item.id} itemData={item}/>
            ))}
            <InfoCard />
          </SCards>
        </div>

        <button className="btn_close" onClick={handleCloseSidebar}>
          <IoMdArrowDropleft />
        </button>
      </div>

            

    </div>
  );
}

export default SideBarF;