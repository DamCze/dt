using dt.storage.application.Interfaces;
using dt.storage.application.Models;
using dt.storage.infrastructure.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace dt.Controllers
{
    //[Authorize]
    [Route("/dt/api/v1")]
    public class ApiController : Controller
    {
        private IDbRepository _dbRepository;
        private IUsersMealsRepository _usersMeals;

        public ApiController(IDbRepository dbRepository, IUsersMealsRepository repo)
        {
            _dbRepository = dbRepository;
            _usersMeals = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDataAsync()
        {
            ICollection<Meal> result = await _dbRepository.GetAllMealsAsync();
            return Ok(result);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetPlotData(Guid userId)
        {
            ICollection<PlotData> result = await _usersMeals.GetUsersMealAsync(userId);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostDiet([FromBody] UsersMeal[] usersMeal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(usersMeal);
            }

            foreach(var i in usersMeal)
            {
                await _usersMeals.SaveAsync(i);
            }

            return Ok();
        }
        //[HttpPost]
        //[Route("/dt/api/v1")]
        //public IActionResult PostString(string x)
        //{

        //    return Ok();
        //}
    }
}
