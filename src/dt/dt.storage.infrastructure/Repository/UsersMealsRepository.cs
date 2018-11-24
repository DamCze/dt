﻿using dt.storage.application.Interfaces;
using dt.storage.application.Models;
using dt.storage.infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dt.storage.infrastructure.Repository
{
    public class UsersMealsRepository : IUsersMealsRepository
    {
        private readonly MyContext _context;
        private bool _disposed = false;

        public UsersMealsRepository(MyContext context)
        {
            _context = context;
        }

        public async Task SaveAsync(UsersMeal usersMeal)
        {
            _context.UsersMeals.Add(usersMeal);
            await _context.SaveChangesAsync();
        }

        public async Task<List<UsersMeal>> GetById(Guid id)
        {
            return await _context.UsersMeals.Where(uM => uM.UsersMealId == id).AsQueryable().ToListAsync();
        }

        public async Task<List<Meal>> GetUsersMealAsync(Guid userId)
        {
            return await (from m in _context.Meals
                          join uM in _context.UsersMeals
                          on m.MealId equals uM.MealId
                          where uM.UserId == userId
                          select new Meal(m.MealId, m.Label, m.Kcal, m.Fat, m.Protein, m.Carbo)
                          ).ToListAsync();
        }

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
