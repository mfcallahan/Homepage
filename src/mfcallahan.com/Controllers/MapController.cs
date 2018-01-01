using Homepage.Dtos;
using Newtonsoft.Json;
using RestSharp;
using System.Configuration;
using System.Web.Mvc;

namespace Homepage.Web.Controllers
{
    public class MapController : Controller
    {
        [HttpGet]
        public JsonResult GetGmrsRepeaters()
        {
            GmrsRepeaters gmrs = new GmrsRepeaters();

            var client = new RestClient(ConfigurationManager.AppSettings["gmrsLayerUrl"]);
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute<GmrsRepeaters>(request);
            gmrs = JsonConvert.DeserializeObject<GmrsRepeaters>(response.Content);

            return null;
        }
    }
}