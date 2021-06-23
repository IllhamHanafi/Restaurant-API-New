import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
