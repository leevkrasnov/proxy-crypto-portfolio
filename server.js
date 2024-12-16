import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/api/proxy', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL параметр обязателен' });
  }

  try {
    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при запросе к API:', error.message);
    res.status(500).json({ error: 'Ошибка при запросе к API' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
