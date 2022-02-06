import express from 'express';
import { initServer } from './server';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initServer(app);
