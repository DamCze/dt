using System;
using Newtonsoft.Json;

namespace dt.storage.application.Models
{
    public class User
    {
        public Guid UserId { get; private set; }
        public string Name { get; private set; }
        public string Surname { get; private set; }
        public string Email { get; private set; }
        [JsonProperty]
        public DateTime DateOfBirth { get; set; }

        public User(Guid userId, string name, string surname, string email, DateTime dateOfBirth)
        {
            UserId = userId;
            Name = name;
            Surname = surname;
            Email = email;
            DateOfBirth = dateOfBirth;
        }
    }
}
