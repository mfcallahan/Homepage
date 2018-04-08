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

            CheckLimit();

            Client = new RestClient(BingUrl);
            Client.AddDefaultParameter("key", BingKey);
        }

        bool CheckLimit()
        {
            return true;
        }

        public void GeocodeAddress(ApiInputAddress inputAdr)
        {
            RestRequest request = new RestRequest(Method.GET);
            request.AddParameter("key", BingKey);

            if (!string.IsNullOrEmpty(inputAdr.Address))
                request.AddParameter("addressLine", inputAdr.Address);
            if (!string.IsNullOrEmpty(inputAdr.City))
                request.AddParameter("locality", inputAdr.City);
            if (!string.IsNullOrEmpty(inputAdr.StateProv))
                request.AddParameter("adminDistrict", inputAdr.StateProv);
            if (!string.IsNullOrEmpty(inputAdr.PostalCode))
                request.AddParameter("inputAdr.PostalCode", inputAdr.PostalCode);
            if (!string.IsNullOrEmpty(inputAdr.Country))
                request.AddParameter("countryRegion", inputAdr.Country);            

            var response = Client.Execute(request);           

            BingGeocodeOutput output = JsonConvert.DeserializeObject<BingGeocodeOutput>(response.Content);

            foreach (var r in output.resourceSets[0].resources)
            {
                ApiOutputAddress o = new ApiOutputAddress();               
                o.OutputAddress = r.address.addressLine;
                o.OutputCity = r.address.locality;
                o.OutputStateProv = r.address.adminDistrict;
                o.OutputPostalCode = r.address.postalCode;
                o.OutputCountry = r.address.countryRegion;
                o.Confidence = r.confidence;
                o.Longitude = r.geocodePoints[0].coordinates[0];
                o.Latitude = r.geocodePoints[0].coordinates[1];
                o.Source = "Bing";

                inputAdr.OutputAddresses.Add(o);
            }
        }
    }
}