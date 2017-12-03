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

            // site styles
            bundles.Add(new StyleBundle("~/Content/site-styles").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/font-awesome.min.css",
                "~/Content/featherlight.min.css",
                "~/Content/featherlight.gallery.min.css",

                "~/Content/site.css"));
            // site scripts
            bundles.Add(new ScriptBundle("~/bundles/site-scripts").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery.validate*",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/respond.js",
                "~/Scripts/featherlight.min.js",
                "~/Scripts/featherlight.gallery.min.js",
                "~/Scripts/app.js"));

            // homepage style
            bundles.Add(new StyleBundle("~/Content/home-styles").Include(
                "~/Content/home.css"));

            // homepage scripts
            bundles.Add(new ScriptBundle("~/bundles/home-scripts").Include(
                "~/Scripts/home.js"));

            // radio style
            bundles.Add(new StyleBundle("~/Content/radio-styles").Include(
                "~/Content/radio.css"));

            // map style
            bundles.Add(new StyleBundle("~/Content/map-styles").Include(
                "~/Content/map.css"));

            // map scripts
            bundles.Add(new ScriptBundle("~/bundles/map-scripts").Include(
                "~/Scripts/map.js"));
        }
    }
}