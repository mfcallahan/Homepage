using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

#pragma warning disable 1591
namespace Homepage.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
#pragma warning restore 1591