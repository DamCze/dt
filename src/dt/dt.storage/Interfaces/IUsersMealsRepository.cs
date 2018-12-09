using dt.storage.application.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace dt.storage.application.Interfaces
{
    public interface IUsersMealsRepository
    {
        Task SaveAsync(UsersMeal usersMeal);
        Task<List<PlotData>> GetUsersMealAsync(Guid userId);
        Task<List<UsersMeal>> GetById(Guid id);
    }
}
