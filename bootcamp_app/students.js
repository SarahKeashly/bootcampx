const { Pool } = require('pg');

const pool = new Pool({
  user: 'sarahkeashly',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

//name is not showing up - check with mentor
pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));