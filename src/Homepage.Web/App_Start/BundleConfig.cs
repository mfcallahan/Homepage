using System.Web.Optimization;

namespace Homepage
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {          
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            // app scripts
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app.js"));

            // app styles
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/site.css",
                "~/Content/bootstrap.min.css",
                "~/Content/font-awesome.min.css"));

            // ArcGIS
            bundles.Add(new ScriptBundle("~/bundles/map").Include(
                "~/Scripts/map.js"));
            //bundles.Add(new ScriptBundle("~/bundles/arcgis", "http://js.arcgis.com/3.20/init.js").Include(
            //    "~/Scripts/init.js"));
            //bundles.Add(new StyleBundle("~/bundles/arcgis-css", "http://js.arcgis.com/3.20/esri/css/esri.css").Include(
            //    "~/Content/esri.css"));
        }
    }
}
