import React, { useState } from 'react';
import './App.css';

import MenuBar from './components/MenuBar';
import Content from './components/Content';

function App() {
  const [currentPage, setCurrentPage] = useState('Geral');
  
  return <>
    <MenuBar activeItem={currentPage} onClick={setCurrentPage}/>
    <Content currentPage={currentPage}/>
  </>;
}

export default App;
