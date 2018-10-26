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

        public async Task SaveAsync(User user)
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

        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.AsQueryable().ToListAsync();
        }

        public async Task<User> GetUserIdAsync(Guid userId)
        {
            return await _context.Users.Where(u => u.UserId == userId).SingleOrDefaultAsync();
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
