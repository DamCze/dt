﻿using dt.storage.application.Interfaces;
using dt.storage.application.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace dt.Controllers
{
    //[Authorize]
    [Route("/dt/api/v1")]
    public class ApiController : Controller
    {
        private IDbRepository _dbRepository;

        public ApiController(IDbRepository dbRepository)
        {
            _dbRepository = dbRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDataAsync()
        {
            ICollection<Meal> result = await _dbRepository.GetAllMealsAsync();
            return Ok(result);
        }
    }
}
