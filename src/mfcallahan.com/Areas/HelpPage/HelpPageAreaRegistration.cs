using System.Web.Http;
using System.Web.Mvc;

namespace Homepage.Areas.HelpPage
{
    public class HelpPageAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "HelpPage";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            //mfcallahan.com/ApiDocumentation
            context.MapRoute(
                "HelpPage_Default",
                "ApiDocumentation/{action}/{apiId}",
                new { controller = "Help", action = "Index", apiId = UrlParameter.Optional });

            //mfcallahan.com/api
            context.MapRoute(
                "api",
                "api",
                new { controller = "Help", action = "Index", apiId = UrlParameter.Optional });

            HelpPageConfig.Register(GlobalConfiguration.Configuration);
        }
    }
}