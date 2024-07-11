import express from 'express';
import routerApi from './routes/index.js';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from './middlewares/error.handler.js';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(express.json());

const whitelist = [
  'http://localhost:8080',
  'https://myapp.co',
  'http://127.0.0.1:5500',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin || !origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva', (req, res) => {
  res.send('New route');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Corriendo en http://localhost:' + PORT);
});
