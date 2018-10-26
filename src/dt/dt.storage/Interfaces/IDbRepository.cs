using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using dt.storage.application.Models;

namespace dt.storage.application.Interfaces
{
    public interface IDbRepository
    {
        Task<List<User>> GetUserByIdAsync(Guid userId);
        Task SaveAsync(User user);
        Task<List<User>> GetAllAsync();
    }
}
