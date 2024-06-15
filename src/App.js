import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { useState,useRef, useEffect } from 'react';

import ContentContainer from './Component/ContentContainer/ContentContainer'

function App() {
  

  return (
    <>
    <Header />
    <ContentContainer />
    </>
  );
}

export default App;
