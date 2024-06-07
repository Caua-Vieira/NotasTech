require('dotenv').config();
const { Pool } = require('pg');

let globalPool;

async function connect() {
  if (globalPool) {
    return globalPool.connect();
  }

  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });

  globalPool = pool;

  try {
    const client = await pool.connect();
    client.release();
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados', error);
  }

  return pool;
}

module.exports = { connect };
