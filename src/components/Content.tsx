import React from 'react';
import General from '../pages/General';
import Monthly from '../pages/Monthly';

const Content = () => {
  // const page = 'General';
  const page = 'Monthly';
  // const page = 'Pay Day';

  return <>
    {/* {page === 'General' && <General />} */}
    {page === 'Monthly' && <Monthly />}
    {/* {page === 'Pay Day' && <PayDay />} */}
  </>
}

export default Content;