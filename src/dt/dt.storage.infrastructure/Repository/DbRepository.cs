using dt.storage.application.Exceptions;
using dt.storage.application.Interfaces;
using dt.storage.application.Models;
using dt.storage.infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dt.storage.infrastructure.Repository
{
    public class DbRepository : IDbRepository, IDisposable
    {
        private readonly MyContext _context;
        private bool _disposed = false;

        public DbRepository(MyContext context)
        {
            _context = context;
        }

        public async Task SaveUserAsync(User user)
        {
            User result = await GetUserIdAsync(user.UserId);

            if (result != null)
            {
                throw new DuplicateKeyException(user.UserId);
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task<List<User>> GetUserByIdAsync(Guid userId)
        {
            return await _context.Users.Where(u => u.UserId == userId).AsQueryable().ToListAsync();
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.Users.AsQueryable().ToListAsync();
        }

        public async Task SaveMealAsync(Meal meal)
        {
            Meal result = await GetMealIdAsync(meal.MealId);

            if(result != null)
            {
                throw new DuplicateKeyException(meal.MealId);
            }

            _context.Meals.Add(meal);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Meal>> GetMealByIdAsync(Guid mealId)
        {
            return await _context.Meals.Where(m => m.MealId == mealId).AsQueryable().ToListAsync();
        }

        public async Task<List<Meal>> GetAllMealsAsync()
        {
            return await _context.Meals.AsQueryable().ToListAsync();
        }

        public void SaveMeals(List<List<string>> arr)
        {
            foreach (var i in arr)
            {
                for (var j = 0; j < i.Count; j++)
                {
                    if (i[j].Length == 0)
                    {
                        i[j] = "0";
                    }
                }

                _context.Meals.Add(new Meal(Guid.NewGuid(), i[0], double.Parse(i[1]), double.Parse(i[2]), double.Parse(i[3]), double.Parse(i[4])));
                _context.SaveChanges();
            }
        }

        #region Checking ID to save entities support
        private async Task<User> GetUserIdAsync(Guid userId)
        {
            return await _context.Users.Where(u => u.UserId == userId).SingleOrDefaultAsync();
        }
        

        private async Task<Meal> GetMealIdAsync(Guid mealId)
        {
            return await _context.Meals.Where(m => m.MealId == mealId).SingleOrDefaultAsync();
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
