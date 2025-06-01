import React from 'react';

const App = () => {
  const loginWithAngelOne = () => {
    const CLIENT_ID = 'YOUR_CLIENT_ID';
    const REDIRECT_URI = 'http://localhost:3000/callback';
    window.location.href = `https://smartapi.angelbroking.com/publisher-login?api_key=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Paper Trading App</h1>
      <button
        onClick={loginWithAngelOne}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login with Angel One
      </button>
    </div>
  );
};

export default App;
