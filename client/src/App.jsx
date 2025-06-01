import React from 'react';
import Callback from "./pages/Callback";

const App = () => {
  const loginWithAngelOne = () => {
    const CLIENT_ID = '8oOb83yJ'; // Your actual Angel One API key
    const REDIRECT_URI = 'https://papertrade.vercel.app/callback'; // Your live redirect URI

    const loginUrl = `https://smartapi.angelbroking.com/publisher-login?api_key=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    window.location.href = loginUrl;
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

<Route path="/callback" element={<Callback />} />

export default App;
