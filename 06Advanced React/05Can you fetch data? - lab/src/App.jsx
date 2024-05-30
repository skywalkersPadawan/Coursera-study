import React from 'react';
/* this lab is not completed and it will be worked on later */

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {};

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: '40px' }}>
      <h1>Customer data</h1>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
