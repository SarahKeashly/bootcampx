-- The admissions department wants to know the total number of students from any number of cohorts combined.

-- SELECT COUNT(id)
-- from students
-- WHERE cohort_id < 4;

SELECT count(id)
FROM students 
WHERE cohort_id IN (1,2,3);