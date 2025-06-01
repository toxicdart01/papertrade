import React, { useState } from "react";

export default function StockTracker() {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState(null);
  const [target, setTarget] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [error, setError] = useState("");

  // Replace this with your real API call later
  async function fetchPrice() {
    setError("");
    if (!symbol) return;

    try {
      // Using a free public API for example
      // You can replace this with NSE/BSE/other Indian market API when ready
      const response = await fetch(
        `https://api.example.com/stock/${symbol.toUpperCase()}`
      );
      if (!response.ok) throw new Error("Stock not found");

      const data = await response.json();
      setPrice(data.price);
    } catch (err) {
      setError(err.message || "Error fetching price");
      setPrice(null);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "20px auto", padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Paper Trading - Stock Tracker</h2>

      <input
        type="text"
        placeholder="Enter Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button onClick={fetchPrice} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Get Price
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {price !== null && (
        <div style={{ marginTop: 20 }}>
          <p>
            Current Price of <b>{symbol.toUpperCase()}</b>: ₹{price}
          </p>

          <input
            type="number"
            placeholder="Set Target Price"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 10 }}
          />
          <input
            type="number"
            placeholder="Set Stop Loss Price"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 10 }}
          />
        </div>
      )}
    </div>
  );
}
