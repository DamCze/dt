using dt.storage.application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dt.Controllers
{
    //[Authorize]
    [Route("/dt/id/v1")]
    public class UserController : Controller
    {
        private IUserContext _userContext;

        public UserController(IUserContext userContext)
        {
            _userContext = userContext;
        }

        [HttpGet]
        public IActionResult GetIdAsync()
        {
            Guid result = _userContext.GetUserId();
            return Ok(result);
        }

    }
}
