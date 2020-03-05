
const type = process.env.PROCESS_TYPE || 'web';
const db_action = process.env.DB_ACTION;

if (type === 'web') {
  require('./web');
} 
