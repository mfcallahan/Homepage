using Homepage.Dtos;
using Newtonsoft.Json;
using RestSharp;

namespace Homepage.Data
{
    public static class Esri
    {
        public static dynamic GetFeatures(string url, string dto)
        {
            var client = new RestClient(url);
            var request = new RestRequest(Method.GET);
            IRestResponse response;

            switch (dto)
            {
                case "GmrsRepeaters":
                    response = client.Execute<FeatureLayer>(request);
                    return JsonConvert.DeserializeObject<FeatureLayer>(response.Content);
                default:
                    return null;
            }            
        }
    }
}