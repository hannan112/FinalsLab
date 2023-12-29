import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Make sure to import Provider
import store from './store/store'; // Make sure to import your Redux store
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>This is Emoji Hub</h1>
        <h2>Welcome Here...! Here you can find all Types of emoji here...!</h2>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
