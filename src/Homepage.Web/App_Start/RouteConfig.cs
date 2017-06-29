using System.Web.Mvc;
using System.Web.Routing;

#pragma warning disable 1591
namespace Homepage
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            //mfcallahan.com/WeatherMap
            routes.MapRoute(
                "WeatherMap",
                "WeatherMap", 
                defaults: new { controller = "Home", action = "WeatherMap" }
            );

            //mfcallahan.com
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
#pragma warning restore 1591
