using System;
using System.Collections.Generic;
using System.Text;

namespace dt.storage.application.Models
{
    public class Workout
    {
        public Guid WorkoutId { get; private set; }
        public string Name { get; private set; }
        public DateTime StartDateTime { get; private set; }
        public DateTime EndDateTime { get; private set; }
        public string Color { get; private set; }

        public Workout(Guid workoutId, string name, DateTime startDateTime, DateTime endDateTime, string color)
        {
            WorkoutId = workoutId;
            Name = name;
            StartDateTime = startDateTime;
            EndDateTime = endDateTime;
            Color = color;
        }

    }
}
