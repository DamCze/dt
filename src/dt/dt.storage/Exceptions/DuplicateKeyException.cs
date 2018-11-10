using System;

namespace dt.storage.application.Exceptions
{
    public class DuplicateKeyException : Exception
    {
        public DuplicateKeyException(Guid id)
            : base(string.Format($"Error while inserting , this entity already exists in database : ID={id}"))
        {

        }
    }
}
