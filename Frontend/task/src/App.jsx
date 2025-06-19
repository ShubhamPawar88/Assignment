import React from 'react';
import FetchConfig from './assets/FetchConfig';
import UpdateRemark from './assets/UpdateRemark';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <FetchConfig />
      <UpdateRemark />
    </div>
  );
}

export default App;