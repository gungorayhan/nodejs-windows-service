const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000;

let latestData = null;

// Veri çekme fonksiyonu
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    latestData = response.data;
    console.log('Veri çekildi:', latestData);
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

// Belirli aralıklarla veri çekme (örneğin, her 10 dakikada bir)
setInterval(fetchData, 10 * 60 * 1000);

// İlk veri çekme çağrısı
fetchData();

// Express.js rotası
app.get('/data', (req, res) => {
  if (latestData) {
    res.json(latestData);
  } else {
    res.status(503).send('Veri henüz çekilmedi. Lütfen daha sonra tekrar deneyin.');
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});