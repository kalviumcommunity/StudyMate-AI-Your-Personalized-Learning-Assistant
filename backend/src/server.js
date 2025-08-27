import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Import the chat router
import chatRouter from './routes/chat.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Basic health check
app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'StudyMate API', version: '1.0.0' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'healthy', time: new Date().toISOString() });
});

// Load our chat routes under /api/chat
app.use('/api/chat', chatRouter);

// Error handler
app.use((err, _req, res, _next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: err?.message || 'Internal Server Error' });
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});