using System;
using System.Collections.Generic;
using System.Text;

namespace dt.storage.application.Models
{
    public class PlotData
    {
        public double Kcal { get; private set; }
        public double Fat { get; private set; }
        public double Protein { get; private set; }
        public double Carbo { get; private set; }
        public DateTime EntityCreation { get; private set; }

        public PlotData(double kcal, double fat, double protein, double carbo, DateTime entityCreation)
        {
            Kcal = kcal;
            Fat = fat;
            Protein = protein;
            Carbo = carbo;
            EntityCreation = entityCreation;
        }

    }
}
