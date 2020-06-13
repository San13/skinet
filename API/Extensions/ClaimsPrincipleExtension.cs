using System.Linq;
using System.Security.Claims;

namespace API.Extensions
{
    // API EXTENSION USER MANAGER FROM CLAIM
    public static class ClaimsPrincipleExtension
    {
        public static string RetrieveEmailFromPrinciple(this ClaimsPrincipal user)
        {
            return user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
        }
    }
}