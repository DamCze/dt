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

        public ApiController(IDbRepository dbRepository, IUserContext userContext)
        {
            _dbRepository = dbRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDataAsync()
        {
            ICollection<Meal> result = await _dbRepository.GetAllMealsAsync();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostDiet([FromBody] Meal meal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(meal);
            }

            await _dbRepository.SaveMealAsync(meal);
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
