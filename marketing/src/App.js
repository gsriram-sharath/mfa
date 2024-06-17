import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  );
}