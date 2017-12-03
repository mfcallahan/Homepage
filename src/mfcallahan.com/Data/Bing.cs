using Homepage.Dtos;
using Newtonsoft.Json;
using RestSharp;
using System.Collections.Generic;
using System.Configuration;

namespace Homepage.Data
{
    public class Bing
    {
        readonly string BingKey;
        readonly string BingUrl;
        RestClient Client;

        public Bing()
        {
            BingKey = ConfigurationManager.AppSettings["bingKey"].ToString();
            BingUrl = ConfigurationManager.AppSettings["bingUrl"].ToString();

            Client = new RestClient(BingUrl);
            Client.AddDefaultParameter("key", BingKey);
        }

        public ApiResponseGeocode Geocode(string address, string city, string stateProv, string postalCode, string country)
        {           
            RestRequest request = new RestRequest(Method.GET);
            //request.AddParameter("key", BingKey);

            if (!string.IsNullOrEmpty(address))
                request.AddParameter("addressLine", address);
            if (!string.IsNullOrEmpty(city))
                request.AddParameter("locality", city);
            if (!string.IsNullOrEmpty(stateProv))
                request.AddParameter("adminDistrict", stateProv);
            if (!string.IsNullOrEmpty(postalCode))
                request.AddParameter("postalCode", postalCode);
            if (!string.IsNullOrEmpty(country))
                request.AddParameter("countryRegion", country);
            

            var response = Client.Execute(request);

            BingGeocodeOutput output = JsonConvert.DeserializeObject<BingGeocodeOutput>(response.Content);

            return null;
        }
    }
}