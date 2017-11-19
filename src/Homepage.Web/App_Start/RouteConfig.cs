using System.Web.Mvc;
using System.Web.Routing;

#pragma warning disable 1591
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
#pragma warning restore 1591
