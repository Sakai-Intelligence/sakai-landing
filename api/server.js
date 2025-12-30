/**
 * Local development server that mimics Azure Functions
 * This wraps the Azure Function for local testing with Docker
 */

const express = require('express');
const cors = require('cors');
const emailFunction = require('./email/index');

const app = express();
const PORT = process.env.PORT || 7071;

app.use(cors());
app.use(express.json());

// Wrap Azure Function for Express
app.all('/api/email', async (req, res) => {
  // Create a mock Azure Functions context
  const context = {
    log: (...args) => console.log(...args),
    res: null,
  };
  context.log.error = (...args) => console.error(...args);

  // Call the Azure Function
  await emailFunction(context, {
    method: req.method,
    body: req.body,
  });

  // Send the response
  if (context.res) {
    res.status(context.res.status || 200);
    if (context.res.headers) {
      Object.entries(context.res.headers).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
    }
    res.json(context.res.body);
  } else {
    res.status(200).json({ success: true });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Local API server running on port ${PORT}`);
});
