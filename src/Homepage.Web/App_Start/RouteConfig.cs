using System.Web.Mvc;
using System.Web.Routing;

namespace Homepage
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            //mfcallahan.com/Map
            routes.MapRoute(
                "map", 
                "map", 
                defaults: new { controller = "Home", action = "Map" }
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
