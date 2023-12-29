import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from './store/categoriesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    navigate(`/details/${id}`);
  };

  const fetchDataFromAPI = () => {
    dispatch(fetchCategories());
  };

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <p>Numeric Value: {category.value}</p>
          <button onClick={() => handleCategoryClick(category.id)}>Details</button>
        </div>
      ))}
      <button onClick={fetchDataFromAPI}>Fetch Data from API</button>
    </div>
  );
};

export default HomePage;
