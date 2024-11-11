import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
// import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MFE1 from 'mfe1/MFE1';
// const MFE1 = React.lazy( import('mfe1/MFE1'));

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Layout/>} >
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/mfe-1/*" element={<MFE1/>} />
              </Route>
          </Routes>
      </HashRouter>
  )
}

export default App
