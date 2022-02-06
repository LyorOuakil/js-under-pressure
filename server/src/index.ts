import express from 'express';
import { routes } from './routes';
import { initServer } from './server';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

initServer(app);
routes(app);
