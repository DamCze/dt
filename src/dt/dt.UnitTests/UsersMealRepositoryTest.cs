using dt.storage.application.Configuration;
using dt.storage.application.Models;
using dt.storage.infrastructure.Context;
using dt.storage.infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace dt.UnitTests
{
    public class UsersMealRepositoryTest
    {
        private UsersMealsRepository _repository;
        private MyContext _context;
        private AppConfiguration _appConfiguration;

        #region Initialization
        public UsersMealRepositoryTest()
        {
            _appConfiguration = new AppConfiguration();
            _context = new MyContext(_appConfiguration.PostgreSQL);
            _repository = new UsersMealsRepository(_context);
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
        public async Task Should_Insert_And_Get_Data()
        {
            // arrange
            UsersMeal usersMeal = new UsersMeal(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid());
            List<UsersMeal> result = null;

            // act
            await _repository.SaveAsync(usersMeal);
            result = await _repository.GetById(usersMeal.UsersMealId);

            // assert
            Assert.Equal(usersMeal.MealId, result[0].MealId);
            Assert.Equal(usersMeal.UserId, result[0].UserId);
            Assert.Equal(usersMeal.UsersMealId, result[0].UsersMealId);
        }
    }
}
