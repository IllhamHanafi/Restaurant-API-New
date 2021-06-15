import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';
import { modifyMessage } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

// add the get messages endpoint
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, addMessage);

export default indexRouter;
