using dt.storage.application.Models;
using dt.storage.infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dt.storage.infrastructure.Repository
{
    public class WorkoutRepository
    {
        private readonly MyContext _context;
        private bool _disposed = false;

        public WorkoutRepository(MyContext context)
        {
            _context = context;
        }

        public async Task SaveWorkoutAsync(Workout workout)
        {
            _context.Workouts.Add(workout);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Workout>> GetAllWorkoutsAsync()
        {
            return await _context.Workouts.AsQueryable().ToListAsync();
        }

        public async Task<List<Workout>> GetWorkoutByIdAsync(Guid workoutId)
        {
            return await _context.Workouts.Where(w => w.WorkoutId == workoutId).AsQueryable().ToListAsync();
        }

        #region Checking Id to save entities support
        private async Task<Workout> GetWorkoutIdAsync(Guid workoutId)
        {
            return await _context.Workouts.Where(w => w.WorkoutId == workoutId).SingleOrDefaultAsync();
        }
        #endregion

        #region Dispose support
        public void Dispose()
        {
            Dispose(true);
        }
        private void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
                _disposed = true;
            }
        }
        #endregion

    }
}
