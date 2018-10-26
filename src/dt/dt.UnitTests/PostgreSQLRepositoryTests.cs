using System;
using System.Threading.Tasks;
using Xunit;
using dt.storage.application.Configuration;
using dt.storage.application.Models;
using dt.storage.application.Exceptions;
using dt.storage.infrastructure.Context;
using dt.storage.infrastructure.Repository;
using System.Collections.Generic;

namespace dt.UnitTests
{
    public class PostgreSQLRepositoryTests : IDisposable
    {
        private DbRepository _repository;
        private MyContext _context;
        private AppConfiguration _appConfiguration;

        #region Initialization
        public PostgreSQLRepositoryTests()
        {
            _appConfiguration = new AppConfiguration();
            _context = new MyContext(_appConfiguration.PostgreSQL);
            _repository = new DbRepository(_context);
            _context.Database.EnsureCreated();
        }
        #endregion

        #region Dispose support
        public void Dispose()
        {
            _context.Dispose();
            _repository.Dispose();
        }
        #endregion

        [Fact]
        public async Task Should_Insert_And_Get_User()
        {
            // arrange
            DateTime date = DateTime.UtcNow;
            date = new DateTime(date.Year, date.Month, date.Day, date.Hour, date.Minute, date.Second, date.Kind);
            User user = new User(Guid.NewGuid(), "Damian", "Czech", "damian@example.com", date);
            List<User> result = null;

            // act
            await _repository.SaveAsync(user);
            result = await _repository.GetUserByIdAsync(user.UserId);

            // assert
            Assert.Equal(user.UserId, result[0].UserId);
            Assert.Equal(user.Name, result[0].Name);
            Assert.Equal(user.Surname, result[0].Surname);
            Assert.Equal(user.Email, result[0].Email);
            Assert.Equal(user.DateOfBirth, result[0].DateOfBirth);
        }
    }
}
