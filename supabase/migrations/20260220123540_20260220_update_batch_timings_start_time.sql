/*
  # Update batch timings to start at 10:00 AM
  
  1. Changes Made
    - Updates all batch timings in the courses table to set start time to 10:00 AM
    - Ensures consistency across all courses for a better student experience
    
  2. Notes
    - This migration updates existing course batch data
    - All courses will now display 10:00 AM as the batch start time
*/

UPDATE courses 
SET batch_timings = jsonb_set(
  COALESCE(batch_timings, '[]'::jsonb),
  '{0,startTime}',
  '"10:00 AM"'::jsonb
)
WHERE batch_timings IS NOT NULL;