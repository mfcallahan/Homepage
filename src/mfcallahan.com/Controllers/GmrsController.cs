using Homepage.Data;
using Homepage.Dtos;
using System.Collections.Generic;
using System.Configuration;
using System.Web.Mvc;

namespace Homepage.Controllers
{
    public class GmrsController : Controller
    {
        // mfcallahan.com/gmrs
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetGmrsRepeaters()
        {
            FeatureLayer gmrsLayer = Esri.GetFeatures(ConfigurationManager.AppSettings["gmrsLayerUrl"], "GmrsRepeaters");
            var gmrsRepeaters = gmrsLayer.layers[0].featureSet.features;
            List<GmrsRepeater> mapPts = new List<GmrsRepeater>();

            foreach (var repeater in gmrsRepeaters)
            {
                mapPts.Add(new GmrsRepeater(
                    repeater.attributes.Name,
                    repeater.attributes.UrlMyGRMS,
                    repeater.attributes.RX_Frequency,
                    repeater.attributes.Lat,
                    repeater.attributes.Lon)
                );
            }               

            return Json(mapPts);
        }
    }
}