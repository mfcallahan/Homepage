using Newtonsoft.Json;
using System.Net.Http;
using System.Text;

#pragma warning disable 1591
namespace Homepage.Web.Data
{
    public class Tools
    {
        public static void SerializeApiResponse<T>(ref HttpResponseMessage response, ref T apiResponse)
        {
            response.Content = new StringContent(JsonConvert.SerializeObject(apiResponse), Encoding.UTF8, "application/json");
        }
    }
}
#pragma warning restore 1591