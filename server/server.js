const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post('/api/get-access-token', async (req, res) => {
  const { request_token } = req.body;
  try {
    const response = await axios.post(
      'https://apiconnect.angelbroking.com/rest/auth/angelbroking/jwt/v1/generateToken',
      {
        api_key: process.env.CLIENT_ID,
        request_token,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-PrivateKey': process.env.CLIENT_SECRET,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
