using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Homepage.Dtos;
using Homepage.Web.Data;

#pragma warning disable 1591
namespace Homepage.Web.Controllers
{
    public class WebApiController : ApiController
    {
        /// <summary>
        /// Returns a message verifing the API is up and responding.
        /// </summary>
        /// <returns>
        /// This API method returns a string with message verifing the API is up and responding. Messgae: "Hello. The API at mfcallahan.com is responding."
        /// </returns>
        /// <value>
        /// value msg here.
        /// </value>
        /// <example>
        /// example msg here.
        /// </example>
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
        /// <returns>
        /// This API method returns a JSON object containing contact and other information about the author of this website.
        /// </returns> 
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
        /// Returns a string of random charcaters 
        /// </summary>
        /// <param name="length">The desired length of the random string</param>
        /// <param name="useNums">Use numerical chars in the random string</param>
        /// <returns>
        /// This API method returns a string of random charcaters with length equal to supplied parameter
        /// </returns> 
        //mfcallahan.com/api/RandomString
        [HttpGet]
        [Route("api/RandomString")]
        public HttpResponseMessage RandomString(int length, bool useNums)
        {
            HttpResponseMessage httpResponseMsg = Request.CreateResponse();

            httpResponseMsg.StatusCode = HttpStatusCode.OK;
            ApiResponseRandom rnd = new ApiResponseRandom(Tools.GenerateRandonString(length, useNums));

            Tools.SerializeApiResponse(ref httpResponseMsg, ref rnd);

            return httpResponseMsg;
        }

        //TODO: Fix Bing geocoding

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
        //[HttpGet]
        //[Route("api/Geocode")]
        //public HttpResponseMessage Geocode(string address = "", string city = "", string stateProv = "", string postalCode = "", string country = "")
        //{
        //    Bing bing = new Bing();
        //    bing.Geocode(address, city, stateProv, postalCode, country);
        //    return null;
        //}

        ///// <summary>
        ///// Locates an array of input address, returning coordinates of each address as
        ///// well as information about the accuracy of the output locations.
        ///// </summary>        
        ////mfcallahan.com/api/BatchGeocode
        //[HttpPost]
        //[Route("api/BatchGeocode")]
        //public HttpResponseMessage BatchGeocode()
        //{
        //    return null;
        //}
    }
}
#pragma warning restore 1591