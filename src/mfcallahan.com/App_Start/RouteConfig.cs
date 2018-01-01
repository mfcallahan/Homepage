using System.Web.Mvc;
using System.Web.Routing;

namespace Homepage
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // mfcallahan.com/gallery
            routes.MapRoute(
                name: "Gallery",
                url: "Gallery",
                defaults: new { controller = "Home", action = "Gallery" }
            );

            // mfcallahan.com/camping
            routes.MapRoute(
                name: "Camping",
                url: "Camping",
                defaults: new { controller = "Home", action = "Camping" }
            );

            // mfcallahan.com/radio
            routes.MapRoute(
                name: "Radio",
                url: "Radio",
                defaults: new { controller = "Home", action = "Radio" }
            );

            // mfcallahan.com/WRAA720
            routes.MapRoute(
                name: "WRAA720",
                url: "WRAA720",
                defaults: new { controller = "Home", action = "Radio" }
            );

            // mfcallahan.com/K7MFC
            routes.MapRoute(
                name: "K7MFC",
                url: "K7MFC",
                defaults: new { controller = "Home", action = "Radio" }
            );

            // mfcallahan.com/KI7SJQ
            routes.MapRoute(
                name: "KI7SJQ",
                url: "KI7SJQ",
                defaults: new { controller = "Home", action = "Radio" }
            );

            // mfcallahan.com/gmrs
            routes.MapRoute(
                name: "GMRS",
                url: "gmrs",
                defaults: new { controller = "Home", action = "GMRS" }
            );

            // mfcallahan.com/blog
            routes.MapRoute(
                name: "blog",
                url: "blog",
                defaults: new { controller = "Home", action = "Blog" }
            );

            // homepage root: mfcallahan.com
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}