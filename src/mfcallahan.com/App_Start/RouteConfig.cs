using System.Web.Mvc;
using System.Web.Routing;

namespace Homepage
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            //mfcallahan.com/gallery
            routes.MapRoute(
                name: "Gallery",
                url: "Gallery",
                defaults: new { controller = "Home", action = "Gallery" }
            );

            //mfcallahan.com/camping
            routes.MapRoute(
                name: "Camping",
                url: "Camping",
                defaults: new { controller = "Home", action = "Camping" }
            );

            //mfcallahan.com/radio
            routes.MapRoute(
                name: "Radio",
                url: "Radio",
                defaults: new { controller = "Home", action = "Radio" }
            );

            //mfcallahan.com/WRAA720
            routes.MapRoute(
                name: "WRAA720",
                url: "WRAA720",
                defaults: new { controller = "Home", action = "Radio" }
            );

            //mfcallahan.com/radiomap
            routes.MapRoute(
                name: "RadioMap",
                url: "RadioMap",
                defaults: new { controller = "Home", action = "RadioMap" }
            );

            //mfcallahan.com/gmrs
            routes.MapRoute(
                name: "GMRS",
                url: "gmrs",
                defaults: new { controller = "Home", action = "GMRS" }
            );

            //mfcallahan.com/blog
            routes.MapRoute(
                name: "blog",
                url: "blog",
                defaults: new { controller = "Home", action = "Blog" }
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