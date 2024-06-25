// import {
//   architecture,
//   bank,
//   bicycle,
//   car_station,
//   car,
//   coffee,
//   culture,
//   different,
//   entertainment,
//   food,
//   history,
//   industrial,
//   major,
//   nature,
//   religion,
//   shop,
//   sport
// } from '@assets/myIcons';

// import  architecture from '@assets/myIcons/architecture.svg';
// import  bank from '@assets/myIcons/bank.svg';
// import  bicycle from '@assets/myIcons/bicycle.svg';
// import  car_station from '@assets/myIcons/car_station.svg';
// import  car from '@assets/myIcons/car.svg';
// import  coffee from '@assets/myIcons/coffee.svg';
// import  culture from '@assets/myIcons/culture.svg';
// import  different from '@assets/myIcons/different.svg';
// import  entertainment from '@assets/myIcons/entertainment.svg';
// import  food from '@assets/myIcons/food.svg';
// import  history from '@assets/myIcons/history.svg';
// import  industrial from '@assets/myIcons/industrial.svg';
// import  major from '@assets/myIcons/major.svg';
// import  nature from '@assets/myIcons/nature.svg';
// import  religion from '@assets/myIcons/religion.svg';
// import  shop from '@assets/myIcons/shop.svg';
// import  sport from '@assets/myIcons/sport.svg';


import  architecture from '@assets/myIconsPNG/architecture.png';
import  bank from '@assets/myIconsPNG/bank.png';
import  bed from '@assets/myIconsPNG/bed.png';
import  bicycle from '@assets/myIconsPNG/bicycle.png';
import  car_station from '@assets/myIconsPNG/gas_station.png';
import  car from '@assets/myIconsPNG/car.png';
import  coffee from '@assets/myIconsPNG/coffee.png';
import  culture from '@assets/myIconsPNG/culture.png';
import  different from '@assets/myIconsPNG/other.png';
import  entertainment from '@assets/myIconsPNG/entertainment.png';
import  food from '@assets/myIconsPNG/food.png';
import  history from '@assets/myIconsPNG/history.png';
import  industrial from '@assets/myIconsPNG/industrial.png';
import  major from '@assets/myIconsPNG/major.png';
import  nature from '@assets/myIconsPNG/nature.png';
import  religion from '@assets/myIconsPNG/religion.png';
import  shop from '@assets/myIconsPNG/shop.png';
import  sport from '@assets/myIconsPNG/sport.png';

export interface IIcon {
  icon: string,
  text: string,
  isSelected: boolean,
}

export const categories: IIcon[] = [
  { icon: architecture, text: 'Архитектура', isSelected: false },
  { icon: bank, text: 'Банки', isSelected: false },
  { icon: bed, text: 'Место для сна', isSelected: false },
  { icon: bicycle, text: 'Велосипеды', isSelected: false },
  { icon: car_station, text: 'Заправки', isSelected: false },
  { icon: car, text: 'Авто', isSelected: false },
  { icon: coffee, text: 'Кофе/чай', isSelected: false },
  { icon: culture, text: 'Культура', isSelected: false },
  { icon: different, text: 'Разное', isSelected: false },
  { icon: entertainment, text: 'Развлечения', isSelected: false },
  { icon: food, text: 'Еда', isSelected: false },
  { icon: history, text: 'История', isSelected: false },
  { icon: industrial, text: 'Заводы', isSelected: false },
  { icon: major, text: '18+', isSelected: false },
  { icon: nature, text: 'Природа', isSelected: false },
  { icon: religion, text: 'Религия', isSelected: false },
  { icon: shop, text: 'Магазины', isSelected: false },
  { icon: sport, text: 'Спорт', isSelected: false },
];