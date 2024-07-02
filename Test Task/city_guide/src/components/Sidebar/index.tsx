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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRadius, setSearchAddress, setLoading, setFavorites } from '../../store/reducers/geoObjects';
import { FavCollectionRef } from '../../firebase';
import { useAuth } from "../../hooks/useAuth";
import { query, where, getDocs, collection } from "firebase/firestore";
import { Favorites } from '../../store/reducers/geoObjects';

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
      e.preventDefault();
    }
    setRadiusInput(Number(e.target.value));
  };


  const handleInputChange = (e) => {
    setAddressInput(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(setLoading(true));
  };

  // const [favorites, setFavorites] = useState([]);
  const user = useAppSelector(state => state.userReducer);
  const geoObjects = useAppSelector(state => state.geoObjectsReducer);
  const {isAuth, email} = useAuth();
  


const fetchFavorites  = async () => {
  try {
    const q = query(FavCollectionRef, where("usrId", "==", user.id));
    const data = await getDocs(q);
    const favorites: Favorites[] = data.docs.map((elem) => ({
      objectId: elem.data().placeId, // Make sure these field names match your Firestore
      name: elem.data().name, 
      address: elem.data().address,
      hours: elem.data().hours,
      phone: elem.data().phone,
      url: elem.data().url,
      id: elem.id 
    }));
    dispatch(setFavorites(favorites));
    console.log(geoObjects.favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};

  useEffect(() => {
    if (isAuth) {
      fetchFavorites();
    }
  }, [isAuth]);

  return (
    <div className="app">

      <Sidebar className="sidebar-1">
        <Sidebar.Logo className="logo" href="/" img={logo} imgAlt="logo"></Sidebar.Logo>
        <div className='icons'>

          <SButtonSearch onClick={handleOpenSidebarSearch} open={isSidebarOpenSearch}>
            <HiMiniMagnifyingGlass />
          </SButtonSearch>
          

          {isAuth && (
          <SButtonFav className='icon_cont fav' onClick={handleOpenSidebarFav} open={isSidebarOpenFav}>
            <IoMdBookmark />
          </SButtonFav>
          )}

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

      {!geoObjects.isShow ? (
      <>
        <p className="text_search">Избранное:</p>
          <SCards>
          {geoObjects.favorites.map((item) => (
              <Card key={item.objectId} itemData={item}/>
            ))}
          </SCards>
          </>
      ) : <InfoCard />}

        </div>

        <button className="btn_close" onClick={handleCloseSidebar}>
          <IoMdArrowDropleft />
        </button>
      </div>

            

    </div>
  );
}

export default SideBarF;