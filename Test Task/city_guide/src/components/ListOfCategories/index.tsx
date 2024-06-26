import React, { useState, useEffect } from 'react';
import { categories } from '../../constants/categories';
import {
  SList, SLi, SAvatar, SBlock
} from "./styles";
import { useAppDispatch } from '../../hooks/redux';
import { setSelectedCategories } from '../../store/reducers/geoObjects';




const CategoryList = () => {

  const dispatch = useAppDispatch()
  const [filterCategories, setFilterCategories] = useState([]);

  useEffect(() => {
      setFilterCategories(categories);
  }, [categories]);

  const handleClick = (index: number) => {
    setFilterCategories(
        filterCategories.map((el, i) =>
            i === index ? { ...el, isSelected: !el.isSelected } : el
        )
    );
  };

  useEffect(() => {
    console.log(setSelectedCategories(filterCategories.filter(el => el.isSelected)));
    dispatch(setSelectedCategories(filterCategories.filter(el => el.isSelected)));
}, [filterCategories])

  return (
    <SBlock>
      <SList>
        {filterCategories.map((category, index) => (
          <SLi isSelected={category.isSelected} onClick={() => handleClick(index)}>
            <SAvatar src={category.icon}/> {category.text}
          </SLi>
        ))}
      </SList>
    </SBlock>
  );
};

export default CategoryList;