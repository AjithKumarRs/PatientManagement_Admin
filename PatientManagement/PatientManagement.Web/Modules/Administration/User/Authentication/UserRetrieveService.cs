﻿namespace PatientManagement.Administration
{
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Data;
    using MyRow = Entities.UserRow;

    public class UserRetrieveService : IUserRetrieveService
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        private UserDefinition GetFirst(IDbConnection connection, BaseCriteria criteria)
        {
            var user = connection.TrySingle<Entities.UserRow>(criteria);
            if (user != null)
            {
                var tenant = connection.ById<Entities.TenantRow>(user.TenantId);
                return new UserDefinition
                {
                    UserId = user.UserId.Value,
                    Username = user.Username,
                    Email = user.Email,
                    UserImage = user.UserImage,
                    UserPhone = user.PhoneNumber,
                    DisplayName = user.DisplayName,
                    IsActive = user.IsActive.Value,
                    Source = user.Source,
                    PasswordHash = user.PasswordHash,
                    PasswordSalt = user.PasswordSalt,
                    UpdateDate = user.UpdateDate,
                    LastDirectoryUpdate = user.LastDirectoryUpdate,
                    TenantId = user.TenantId.Value,
                    TenantName = tenant.TenantName,
                    InsertDate = user.InsertDate,
                    RestrictedToCabinets = user.RestrictedToCabinets??1,
                    TenantCurrencyId = tenant.CurrencyId??1
                };
            }
            return null;
        }

        public IUserDefinition ById(string id)
        {
            return TwoLevelCache.Get<UserDefinition>("UserByID_" + id, TimeSpan.Zero, TimeSpan.FromDays(1), fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                    return GetFirst(connection, new Criteria(fld.UserId) == Int32.Parse(id));
            });
        }

        public IUserDefinition ByUsername(string username)
        {
            if (username.IsEmptyOrNull())
                return null;

            return TwoLevelCache.Get<UserDefinition>("UserByName_" + username.ToLowerInvariant(), 
                TimeSpan.Zero, TimeSpan.FromDays(1), fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                    return GetFirst(connection, new Criteria(fld.Username) == username);
            });
        }

        public static void RemoveCachedUser(int? userId, string username)
        {
            if (userId != null)
                TwoLevelCache.Remove("UserByID_" + userId);

            if (username != null)
                TwoLevelCache.Remove("UserByName_" + username.ToLowerInvariant());
        }
    }
}