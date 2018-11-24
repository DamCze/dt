using System;
using System.Collections.Generic;
using System.Text;

namespace dt.storage.application.Models
{
    public class UsersMeal
    {
        public Guid UsersMealId { get; private set; }
        public Guid UserId { get; private set; }
        public Guid MealId { get; private set; }

        public UsersMeal(Guid usersMealId, Guid userId, Guid mealId)
        {
            UsersMealId = Guid.NewGuid();
            UserId = userId;
            MealId = mealId;
        }
    }
}
