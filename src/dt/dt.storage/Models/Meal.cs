using System;
using System.Collections.Generic;
using System.Text;

namespace dt.storage.application.Models
{
    public class Meal
    {
        public Guid MealId { get; private set; }
        public string Label { get; private set; }
        public double Kcal { get; private set; }
        public double Fat { get; private set; }
        public double Protein { get; private set; }
        public double Carbo { get; private set; }

        public Meal(Guid mealId, string label, double kcal, double fat, double protein, double carbo)
        {
            MealId = Guid.NewGuid();
            Label = label;
            Kcal = kcal;
            Fat = fat;
            Protein = protein;
            Carbo = carbo;
        }
    }
}
