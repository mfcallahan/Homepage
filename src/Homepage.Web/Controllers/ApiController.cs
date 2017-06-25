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
        /// <summary>
        /// Returns a message verifing the API is up and responding.
        /// </summary>
        //mfcallahan.com/api/Hello
        [HttpGet]
        [Route("api/Hello")]
        public HttpResponseMessage Hello()
        {
            StringBuilder msg = new StringBuilder();
            msg.Append("Hello. The API at mfcallahan.com is responding.");            

            ApiResponseHello apiResponse = new ApiResponseHello("200", msg.ToString());
            HttpResponseMessage httpResponseMsg = Request.CreateResponse(HttpStatusCode.OK);
            Tools.SerializeApiResponse(ref httpResponseMsg, ref apiResponse);

            return httpResponseMsg;
        }

        /// <summary>
        /// Returns information about the author of this website.
        /// </summary>
        //mfcallahan.com/api/About
        [HttpGet]
        [Route("api/About")]
        public HttpResponseMessage About()
        {
            HttpResponseMessage httpResponseMsg = Request.CreateResponse();

            httpResponseMsg.StatusCode = HttpStatusCode.OK;
            ApiResponseBusinessCard apiResponse = new ApiResponseBusinessCard();
            Tools.SerializeApiResponse(ref httpResponseMsg, ref apiResponse);

            return httpResponseMsg;
        }

        /// <summary>
        /// Locates a single input address, returning coordinates of the address as
        /// well as information about the accuracy of the output location.
        /// </summary>
        /// <param name="address">The input address, ex: 703 E Johnson St</param>
        /// <param name="city">The input city, ex: Madison</param>
        /// <param name="stateProv">The input city, ex: Wisconsin</param>
        /// <param name="postalCode">The input city, ex: 53703</param>
        /// <param name="country">The input city, ex: USA</param>
        //mfcallahan.com/api/Geocode
        [HttpGet]
        [Route("api/Geocode")]
        public HttpResponseMessage Geocode(string address = "", string city = "", string stateProv = "", string postalCode = "", string country = "")
        {
            return null;
        }

        /// <summary>
        /// Locates an array of input address, returning coordinates of each address as
        /// well as information about the accuracy of the output locations.
        /// </summary>        
        //mfcallahan.com/api/BatchGeocode
        [HttpPost]
        [Route("api/BatchGeocode")]
        public HttpResponseMessage BatchGeocode()
        {
            return null;
        }
    }
}
