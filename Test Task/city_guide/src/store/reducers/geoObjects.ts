import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIcon } from '../../constants/categories';

export interface Favorites {
  objectId: string;
  name: string;
  category: string;
  address: string;
  hours: string;
  phone: string;
  url: string;
}

interface GeoObjectsState {
  geoObjects: any;
  isLoading: boolean;
  isShow: boolean;
  error: string;
  coordinates: Array<number>;
  radius: number;
  selectedCategories: Array<IIcon>;
  searchAddress: string;
  route: {
    length: number;
    duration: number;
    arrival: Array<number>;
    coord: Array<Array<number>>;
  };
  favorites: Array<Favorites>;
  fullObjectInfo: Favorites;
}

const initialState: GeoObjectsState = {
  geoObjects: [],
  isLoading: false,
  isShow: false,
  error: '',
  coordinates: [0, 0],
  radius: 0,
  selectedCategories: [],
  searchAddress: '',
  route: {
    length: 0,
    duration: 0,
    arrival: [0, 0],
    coord: [],
  },
  favorites: [],
  fullObjectInfo: null,
};

export const geoObjectsSlice = createSlice({
  name: 'geo_objects',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setShow(state, action: PayloadAction<boolean>) {
      state.isShow = action.payload;
    },
    setCoordinates(state, action: PayloadAction<Array<number>>) {
      state.coordinates = action.payload;
    },
    setRadius(state, action: PayloadAction<number>) {
      state.radius = action.payload;
    },
    setSelectedCategories(state, action: PayloadAction<Array<IIcon>>) {
      state.selectedCategories = action.payload;
    },
    geoObjectsFetching(state) {
      state.isLoading = true;
    },
    geoObjectsFetchingSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = '';
      state.geoObjects = action.payload;
    },
    geoObjectsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSearchAddress(state, action: PayloadAction<string>) {
      state.searchAddress = action.payload;
    },
    setRoute(
      state,
      action: PayloadAction<{
        length: number;
        duration: number;
        arrival: Array<number>;
        coord: Array<Array<number>>;
      }>
    ) {
      state.route = action.payload;
    },
    setFavorites(state, action: PayloadAction<Array<Favorites>>) {
      state.favorites = action.payload;
    },
    setFullObjectInfo(state, action: PayloadAction<Favorites>) {
      state.fullObjectInfo = action.payload;
    },
  },
});

export const {
  setLoading,
  setShow,
  setCoordinates,
  setRadius,
  setSelectedCategories,
  setSearchAddress,
  setRoute,
  setFavorites,
  setFullObjectInfo,
} = geoObjectsSlice.actions;

export default geoObjectsSlice.reducer;
