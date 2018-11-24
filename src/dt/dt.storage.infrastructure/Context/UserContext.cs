using dt.storage.application.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace dt.storage.infrastructure.Context
{
    public class UserContext : IUserContext
    {
        private readonly ClaimsPrincipal _user;

        public UserContext(IHttpContextAccessor httpContext)
        {
            if(httpContext.HttpContext != null)
            {
                _user = httpContext.HttpContext.User;
            }
        }

        public Guid GetUserId()
        {
            return new Guid(_user.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }
    }
}
