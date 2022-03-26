import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './pages/login';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllData from './pages/AllData';
import DataCard from './pages/Data';
import { PageNotFound } from './pages/404';

function App() {
  const [api, setApi] = useState([]);
  const [user, isUser] = useState(false);
  useEffect(() => {
    async function reqData() {
      const response = await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setApi(res.data));
      return response;
    }
    reqData();
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Login isUser={isUser} />} />
        {!user ? (
          <Route path='*' element={<PageNotFound />} />
        ) : (
          <>
            <Route path='allData' element={<AllData data={api} />} />
            <Route path='/:id' element={<DataCard data={api} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
