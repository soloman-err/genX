import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import CustomContainer from './components/container/CustomContainer';
import './index.css';
import router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomContainer>
      <RouterProvider router={router} />
    </CustomContainer>
  </React.StrictMode>
);
