using System.Web.Mvc;

namespace Homepage
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());

            // require https
            //filters.Add(new RequireHttpsAttribute());
        }
    }
}