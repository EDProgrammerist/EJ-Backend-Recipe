import app from '@/app';
import { ENV } from '@/config/env';
import { pool } from '@/db';

const startServer = async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connection successful.');
    app.listen(ENV.PORT, () => {
      console.log('--------------------------------------------------');
      console.log(`🚀 ${ENV.APP_NAME} started successfully!`);
      console.log(`📡 URL: ${ENV.BACKEND_URL}`);
      console.log(`🌍 MODE: ${ENV.NODE_ENV}`);
      console.log('--------------------------------------------------');
    });
  } catch (error) {
    console.error('❌ CRITICAL: Could not start the engine:', error);
    process.exit(1);
  }
};

startServer();
