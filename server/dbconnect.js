import { createConnection } from "mysql";

export const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tirthsthal'
  });
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL');
  });