using System;

namespace dt.storage.application.Exceptions
{
    public class DuplicateKeyException : Exception
    {
        public DuplicateKeyException(Guid measurementId)
            : base(string.Format($"Error while inserting MeasurementExceeded, this entity already exists in database : ID={measurementId}"))
        {

        }
    }
}
