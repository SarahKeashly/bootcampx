const { Pool } = require('pg');

const pool = new Pool({
  user: 'sarahkeashly',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const TeacherName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];


//name is not showing up - check with mentor
pool.query(TeacherName, limit, values
  // `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  // FROM teachers
  // JOIN assistance_requests ON teacher_id = teachers.id
  // JOIN students ON student_id = students.id
  // JOIN cohorts ON cohort_id = cohorts.id
  // WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
  // ORDER BY teacher;`
)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  });