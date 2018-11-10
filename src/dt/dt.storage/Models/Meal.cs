using System;
using System.Collections.Generic;
using System.Text;

namespace dt.storage.application.Models
{
    public class Meal
    {
        public Guid MealId { get; private set; }
        public string MealName { get; private set; }
        public double Kcal { get; private set; }
        public double Fat { get; private set; }
        public double Protein { get; private set; }
        public double Carbo { get; private set; }

        public Meal(Guid mealId, string mealName, double kcal, double fat, double protein, double carbo)
        {
            MealId = mealId;
            MealName = mealName;
            Kcal = kcal;
            Fat = fat;
            Protein = protein;
            Carbo = carbo;
        }
    }
}
