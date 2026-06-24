const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;
const MOVIDESK_TOKEN = process.env.MOVIDESK_TOKEN;
const MOVIDESK_BASE = 'https://api.movidesk.com/public/v1';

app.use(cors());
app.use(express.json());

// Tickets
app.get('/api/tickets', async (req, res) => {
  try {
    const params = { token: MOVIDESK_TOKEN, ...req.query };
    const response = await axios.get(`${MOVIDESK_BASE}/tickets`, { params });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ticket por ID
app.get('/api/tickets/:id', async (req, res) => {
  try {
    const params = { token: MOVIDESK_TOKEN };
    const response = await axios.get(`${MOVIDESK_BASE}/tickets/${req.params.id}`, { params });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Agentes
app.get('/api/agents', async (req, res) => {
  try {
    const params = { token: MOVIDESK_TOKEN, ...req.query };
    const response = await axios.get(`${MOVIDESK_BASE}/persons`, { params });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Clientes
app.get('/api/clients', async (req, res) => {
  try {
    const params = { token: MOVIDESK_TOKEN, ...req.query };
    const response = await axios.get(`${MOVIDESK_BASE}/persons`, { params });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy ALVIA rodando na porta ${PORT}`);
});
