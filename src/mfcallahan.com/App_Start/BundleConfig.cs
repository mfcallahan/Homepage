using System.Web.Optimization;

namespace Homepage
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // site styles
            bundles.Add(new StyleBundle("~/Content/style-site").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/font-awesome.min.css",
                "~/Content/featherlight.min.css",
                "~/Content/featherlight.gallery.min.css",
                "~/Content/site.css"));

            // site scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-site").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery.validate*",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/respond.js",
                "~/Scripts/featherlight.min.js",
                "~/Scripts/featherlight.gallery.min.js",
                "~/Scripts/site.js"));

            // highlight.pack.js, {style}.css - custom package from https://highlightjs.org/download/

            // homepage styles
            bundles.Add(new StyleBundle("~/Content/style-home").Include(
                "~/Content/home.css",
                "~/Content/atelier-forest-dark.css"
            ));

            // homepage scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-home").Include(
                "~/Scripts/home.js",
                "~/Scripts/highlight.pack.js"
            ));

            // radio homepage styles
            bundles.Add(new StyleBundle("~/Content/style-radio").Include(
                "~/Content/radio.css"));

            // radio homepage scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-radio").Include(
                "~/Scripts/radio.js"));

            // map styles
            bundles.Add(new StyleBundle("~/Content/style-map").Include(
                "~/Content/leaflet.css",
                "~/Content/map.css"));

            // map scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-map").Include(
                "~/Scripts/leaflet.js"));

            // gmrs map scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-gmrs").Include(
                "~/Scripts/map-gmrs.js"));            

            // ArcGIS Online
            //bundles.Add(new ScriptBundle("~/bundles/scripts-arcgis", "https://js.arcgis.com/4.6/init.js").Include(
            //    "~/Scripts/init.js"));
            //bundles.Add(new StyleBundle("~/bundles/style-arcgis", "https://js.arcgis.com/4.6/esri/css/main.css").Include(
            //    "~/Content/esri.css"));
        }
    }
}