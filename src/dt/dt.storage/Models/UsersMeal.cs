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
        public double Value { get; private set; }
        public DateTime EntityCreation { get; private set; }

        public UsersMeal(Guid userId, Guid mealId, double value)
        {
            UsersMealId = Guid.NewGuid();
            UserId = userId;
            MealId = mealId;
            Value = value;
            EntityCreation = DateTime.Now;
        }
    }
}
