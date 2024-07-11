// import faker from 'faker';
import express from 'express';

const router = express.Router();

router.get('/'),
  (req, res) => {
    const { limit, offset } = req.query;

    if (limit && offset) {
      res.json(limit, offset);
    } else {
      res.send('No hay parametros');
    }

    res.send('Estas en usuarios');
  };

export default router;
