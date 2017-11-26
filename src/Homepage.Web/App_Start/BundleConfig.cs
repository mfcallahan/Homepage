using System.Web.Optimization;

namespace Homepage
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {   
            //bundles.Add(new ScriptBundle("~/bundles/arcgis", "http://js.arcgis.com/3.20/init.js").Include(
            //    "~/Scripts/init.js"));
            //bundles.Add(new StyleBundle("~/bundles/arcgis-css", "http://js.arcgis.com/3.20/esri/css/esri.css").Include(
            //    "~/Content/esri.css"));

            // site scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-site").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery.validate*",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/respond.js",
                "~/Scripts/featherlight.min.js",
                "~/Scripts/featherlight.gallery.min.js",
                "~/Scripts/app.js"));

            // site styles
            bundles.Add(new StyleBundle("~/Content/style-site").Include(                
                "~/Content/bootstrap.min.css",
                "~/Content/font-awesome.min.css",
                "~/Content/featherlight.min.css",
                "~/Content/featherlight.gallery.min.css",
                "~/Content/site.css"));

            // homepage style
            bundles.Add(new StyleBundle("~/Content/style-home").Include(
                "~/Content/home.css"));

            // radio style
            bundles.Add(new StyleBundle("~/Content/style-radio").Include(
                "~/Content/radio.css"));

            // map scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-map").Include(
                "~/Scripts/map.js"));

            // map style
            bundles.Add(new StyleBundle("~/Content/style-map").Include(
                "~/Content/map.css"));
        }
    }
}