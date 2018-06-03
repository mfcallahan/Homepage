using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Homepage.Dtos;
using Homepage.Data;
using Homepage.Queries;
using System;
using System.Threading;
using Homepage.Models;

namespace Homepage.Controllers
{
    public class WebApiController : ApiController
    {
        /// <summary>
        /// Returns information about the author of this website.
        /// </summary>
        /// <hello>
        ///  Hi! If you're looking through my code right now, you obviously have the same 
        ///  passion for software development as I do.  Cool.  Hit me up: matthew.callahan@outlook.com
        /// </hello>
        /// <returns>
        /// This API method returns a JSON object containing contact and other information about the author of this website.
        /// </returns> 
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
        /// Returns a string of random charcaters 
        /// </summary>
        /// <param name="length">The desired length of the random string</param>
        /// <param name="useNums">Use numerical chars in the random string</param>
        /// <returns>
        /// This API method returns a string of random charcaters with length equal to supplied parameter
        /// </returns> 
        [HttpGet]
        [Route("api/RandomString")]
        public HttpResponseMessage RandomString(int length, bool useNums = true)
        {
            HttpResponseMessage httpResponseMsg = Request.CreateResponse();
            httpResponseMsg.StatusCode = HttpStatusCode.OK;

            var rnd = new { value = Tools.GenerateRandonString(length, useNums) };
            Tools.SerializeApiResponse(ref httpResponseMsg, ref rnd);

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
        [HttpGet]
        [Route("api/Geocode")]
        public HttpResponseMessage Geocode(string address = "", string city = "", string stateProv = "", string postalCode = "", string country = "")
        {
            ApiInputAddress inputAdr = new ApiInputAddress(address, city, stateProv, postalCode, country);

            Bing bing = new Bing();
            bing.GeocodeAddress(inputAdr);

            HttpResponseMessage httpResponseMsg = Request.CreateResponse(HttpStatusCode.OK);
            Tools.SerializeApiResponse(ref httpResponseMsg, ref inputAdr);

            return httpResponseMsg;
        }

        /// <summary>
        /// Returns information about an IP address
        /// </summary>
        /// <returns>
        /// This API method returns information about an IP address.
        /// </returns>
        /// <value>
        /// value msg here.
        /// </value>
        /// <example>
        /// example msg here.
        /// </example>
        [HttpGet]
        [Route("api/IpInfo")]
        public HttpResponseMessage IpInfo(string ipAdr)
        {
            IpLocation loc = HomepageQueries.GetIpInfo(ipAdr);
            HttpResponseMessage httpResponseMsg = Request.CreateResponse(HttpStatusCode.OK);

            Tools.SerializeApiResponse(ref httpResponseMsg, ref loc);

            return httpResponseMsg;
        }

        /// <summary>
        /// Returns a delayed response from the server, pausing for s seconds
        /// </summary>
        /// <returns>
        /// This API method returns a message indicating the server waited to respond
        /// </returns>
        /// <value>
        /// value msg here.
        /// </value>
        /// <example>
        /// example msg here.
        /// </example>
        [HttpGet]
        [Route("api/GetDelayedResponse")]
        public string GetDelayedResponse(int waitSeconds)
        {
            Thread.Sleep(waitSeconds * 1000);

            return "The server waited for " + waitSeconds + " seconds.";
        }
    }
}