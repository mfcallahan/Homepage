using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Homepage.Dtos;
using Homepage.Web.Data;

namespace Homepage.Web.Controllers
{
    public class WebApiController : ApiController
    {
        [HttpGet]
        [Route("api/Hello")]
        public HttpResponseMessage Hello(string datatype = "json")
        {
            StringBuilder msg = new StringBuilder();
            msg.Append("Hello. The API at mfcallahan.com is responding.");

            if (!Tools.ValidateDataType(datatype))
            {
                msg.Append("  WARNING: '" + datatype + "' is not a valid value for parameter datatype");
                datatype = "json";
            }                

            ApiResponseHello apiResponse = new ApiResponseHello("200", msg.ToString());
            HttpResponseMessage httpResponseMsg = Request.CreateResponse(HttpStatusCode.OK);
            Tools.SerializeApiResponse(ref httpResponseMsg, ref apiResponse, datatype);

            return httpResponseMsg;
        }

        [HttpGet]
        [Route("api/GetDeveloperInfo")]
        public HttpResponseMessage GetDeveloperInfo(string datatype = "json")
        {
            HttpResponseMessage httpResponseMsg = Request.CreateResponse();

            if (!Tools.ValidateDataType(datatype))
            {
                httpResponseMsg.StatusCode = HttpStatusCode.BadRequest;
                httpResponseMsg.ReasonPhrase = "'" + datatype + "' is not a valid value for parameter datatype";
                throw new HttpResponseException(httpResponseMsg);
            }

            httpResponseMsg.StatusCode = HttpStatusCode.OK;
            ApiResponseBusinessCard apiResponse = new ApiResponseBusinessCard();
            Tools.SerializeApiResponse(ref httpResponseMsg, ref apiResponse, datatype);

            return httpResponseMsg;
        }

        [HttpGet]
        [Route("api/Geocode")]
        public HttpResponseMessage Geocode()
        {
            return null;
        }

        [HttpPost]
        [Route("api/BatchGeocode")]
        public HttpResponseMessage BatchGeocode()
        {
            return null;
        }
    }
}
