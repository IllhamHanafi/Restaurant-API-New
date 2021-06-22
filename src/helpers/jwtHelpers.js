import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
