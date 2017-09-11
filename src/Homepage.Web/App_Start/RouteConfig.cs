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
                name: "WeatherMap",
                url: "WeatherMap", 
                defaults: new { controller = "Home", action = "WeatherMap" }
            );

            //mfcallahan.com/Gallery
            routes.MapRoute(
                name: "Gallery",
                url: "Gallery",
                defaults: new { controller = "Home", action = "Gallery" }
            );

            //mfcallahan.com/Camping
            routes.MapRoute(
                name: "Camping",
                url: "Camping",
                defaults: new { controller = "Home", action = "Camping" }
            );

            //homepage: mfcallahan.com
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
#pragma warning restore 1591
