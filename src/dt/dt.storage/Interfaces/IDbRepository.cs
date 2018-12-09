using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using dt.storage.application.Models;

namespace dt.storage.application.Interfaces
{
    public interface IDbRepository
    {
        Task<List<User>> GetUserByIdAsync(Guid userId);
        Task SaveUserAsync(User user);
        Task<List<User>> GetAllUsersAsync();
        Task<List<Meal>> GetMealByIdAsync(Guid mealId);
        Task SaveMealAsync(Meal meal);
        Task<List<Meal>> GetAllMealsAsync();
        void SaveMeals(List<List<string>> arr);
    }
}
