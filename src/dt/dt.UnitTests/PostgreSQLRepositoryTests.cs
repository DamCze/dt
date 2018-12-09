using dt.storage.application.Configuration;
using dt.storage.application.Models;
using dt.storage.infrastructure.Context;
using dt.storage.infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace dt.UnitTests
{
    public class PostgreSQLRepositoryTests : IDisposable
    {
        private DbRepository _repository;
        private UsersMealsRepository _secRepository;
        private MyContext _context;
        private AppConfiguration _appConfiguration;

        #region Initialization
        public PostgreSQLRepositoryTests()
        {
            _appConfiguration = new AppConfiguration();
            _context = new MyContext(_appConfiguration.PostgreSQL);
            _repository = new DbRepository(_context);
            _secRepository = new UsersMealsRepository(_context);
            _context.Database.EnsureCreated();
        }
        #endregion

        #region Dispose support
        public void Dispose()
        {
            _context.Dispose();
            _repository.Dispose();
            _secRepository.Dispose();
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
            await _repository.SaveUserAsync(user);
            result = await _repository.GetUserByIdAsync(user.UserId);

            // assert
            Assert.Equal(user.UserId, result[0].UserId);
            Assert.Equal(user.Name, result[0].Name);
            Assert.Equal(user.Surname, result[0].Surname);
            Assert.Equal(user.Email, result[0].Email);
            Assert.Equal(user.DateOfBirth, result[0].DateOfBirth);
        }

        [Fact]
        public async Task Should_Insert_And_Get_Meal()
        {
            // arrange 
            Meal meal = new Meal(Guid.NewGuid(), "Rice", 130, 0.3, 2.7, 28);
            List<Meal> result = null;

            // act
            await _repository.SaveMealAsync(meal);
            result = await _repository.GetMealByIdAsync(meal.MealId);

            // assert
            Assert.Equal(meal.MealId, result[0].MealId);
            Assert.Equal(meal.Label, result[0].Label);
            Assert.Equal(meal.Kcal, result[0].Kcal);
            Assert.Equal(meal.Protein, result[0].Protein);
            Assert.Equal(meal.Fat, result[0].Fat);
            Assert.Equal(meal.Carbo, result[0].Carbo);
        }

        [Fact]
        public async Task Should_Insert_And_Get_Data()
        {
            // arrange
            UsersMeal usersMeal = new UsersMeal(Guid.NewGuid(), Guid.NewGuid(), 1);
            List<UsersMeal> result = null;

            // act
            await _secRepository.SaveAsync(usersMeal);
            result = await _secRepository.GetById(usersMeal.UsersMealId);

            // assert
            Assert.Equal(usersMeal.MealId, result[0].MealId);
            Assert.Equal(usersMeal.UserId, result[0].UserId);
            Assert.Equal(usersMeal.UsersMealId, result[0].UsersMealId);
            Assert.Equal(usersMeal.Value, result[0].Value);
        }

        //[Fact]
        //public async Task Should_Insert_And_Get_PLotData()
        //{
        //    // arrange 
        //    Guid mealId = new Guid("4afbea94-3a75-45cc-949c-95810c3c4a53");
        //    Guid userId = new Guid("ef3711cc-dae1-43cc-883a-5b80244b4498");
        //    UsersMeal usersMeal = new UsersMeal(userId, mealId, 2);
        //    List<PlotData> result = null;

        //    // act
        //    await _secRepository.SaveAsync(usersMeal);
        //    result = await _secRepository.GetUsersMealAsync(usersMeal.UserId);

        //    //assert
        //    //Assert.NotNull(result);
        //    Assert.Equal(usersMeal.MealId, result[0].MealId);

        //}
    }
}
