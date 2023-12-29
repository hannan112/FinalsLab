import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryDetails } from './store/categoriesSlice';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const categoryDetails = useSelector((state) => state.categories.categoryDetails);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoryDetails(id))
      .catch((error) => {
        console.error('Error fetching category details:', error);
      });
  }, [dispatch, id]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      {categoryDetails ? (
        <>
          <h1>Category Details</h1>
          <p>Name: {categoryDetails.name}</p>
          <p>Value: {categoryDetails.value}</p>
          <p>Description: {categoryDetails.description}</p>
          <button onClick={handleBackClick}>Back</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
