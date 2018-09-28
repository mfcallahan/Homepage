using System.Web.Optimization;

namespace Homepage
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //BundleTable.EnableOptimizations = true;

            // site styles
            bundles.Add(new StyleBundle("~/Content/styles-site").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/featherlight.min.css",
                "~/Content/featherlight.gallery.min.css",
                "~/Content/site.css"));

            // site scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-site").Include(
                "~/Scripts/jquery-3.3.1.min.js",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/featherlight.min.js",
                "~/Scripts/featherlight.gallery.min.js",
                "~/Scripts/layout.js"));

            // highlight.pack.js, atelier-forest-dark.css.css - custom package from https://highlightjs.org/download/
            // homepage styles
            bundles.Add(new StyleBundle("~/Content/styles-home").Include(
                "~/Content/home.css",
                "~/Content/atelier-forest-dark.css"));

            // homepage scripts
            bundles.Add(new ScriptBundle("~/bundles/scripts-home").Include(
                "~/Scripts/highlight.pack.js"));

            // radio homepage styles
            bundles.Add(new StyleBundle("~/Content/styles-radio").Include(
                "~/Content/radio.css"));
        }
    }
}