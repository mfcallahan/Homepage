using System.Web.Mvc;
using System.Web.Routing;

namespace Homepage
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // mfcallahan.com/radio
            routes.MapRoute(
                name: "Radio",
                url: "Radio",
                defaults: new { controller = "Home", action = "Radio" }
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