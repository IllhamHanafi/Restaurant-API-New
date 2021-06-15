import express from 'express';
import { indexPage, messagesPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

// add the get messages endpoint
indexRouter.get('/messages', messagesPage);

export default indexRouter;
