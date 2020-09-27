import React from 'react';
import General from '../pages/General';
import Monthly from '../pages/Monthly';

const Content = (props: {currentPage: string}) => {
  return <>
    {props.currentPage === 'Geral' && <General />}
    {props.currentPage === 'Mensal' && <Monthly />}
    {/* {page === 'Pay Day' && <PayDay />} */}
  </>
}

export default Content;