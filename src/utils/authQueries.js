export const createUsersTable = `
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  role VARCHAR NOT NULL
  )
`;
