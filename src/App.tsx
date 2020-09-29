import React, { useState } from 'react';
import './App.css';
import General from './pages/General';
import Monthly from './pages/Monthly';

import MenuBar from './components/MenuBar';

const Content = (props: { page: string }) => {
  if (props.page === 'Mensal') return <Monthly />
  if (props.page === 'Pay Day') return <></>
  return <General />
}

function App() {
  const [currentPage, setCurrentPage] = useState('Geral');

  return <>
    <MenuBar activeItem={currentPage} onClick={setCurrentPage} />
    <Content page={currentPage} />
  </>;
}

export default App;
