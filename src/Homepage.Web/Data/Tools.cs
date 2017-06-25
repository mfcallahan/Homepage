using Newtonsoft.Json;
using System.Net.Http;
using System.Text;

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