using System.Collections.Generic;
using System.Configuration;

// Data transfer object classes the encapsulate app Controller and internal/external API data
namespace Homepage.Dtos
{
    #region API
    public class ApiResponseHello
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public IList<string> Methods { get; set; } 

        public ApiResponseHello(string status, string message)
        {
            Status = status;
            Message = message;             

            Methods = new List<string>
            {
                "mfcallahan.com/api/About",
                "mfcallahan.com/api/Hello",
                "mfcallahan.com/api/IpInfo?ip={}",
                "mfcallahan.com/api/RandomString?length={}&useNums={}",
                "mfcallahan.com/api/Geocode?address={}&city={}&stateProv={}&postalCode={}&country={}"
            };
        }
    }

    public class ApiResponseBusinessCard
    {
        public string Name { get; set; }
        public string CallSignHam { get; set; }
        public string CallSignGMRS { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string ResumeUrl { get; set; }
        public string LinkedInUrl { get; set; }
        public string GitHubUrl { get; set; }
        public string GeoNetUrl { get; set; }

        public ApiResponseBusinessCard()
        {
            Name = ConfigurationManager.AppSettings["devInfoName"].ToString();
            Title = ConfigurationManager.AppSettings["devInfoTitle"].ToString();
            Address = ConfigurationManager.AppSettings["devInfoAddress"].ToString();
            Phone = ConfigurationManager.AppSettings["devInfoPhone"].ToString();
            Email = ConfigurationManager.AppSettings["devInfoEmail"].ToString();
            CallSignHam = ConfigurationManager.AppSettings["callSignHam"].ToString();
            CallSignGMRS = ConfigurationManager.AppSettings["callSignGmrs"].ToString();
            ResumeUrl = ConfigurationManager.AppSettings["devInfoResumeUrl"].ToString();
            LinkedInUrl = ConfigurationManager.AppSettings["devInfoLinkedInUrl"].ToString();
            GitHubUrl = ConfigurationManager.AppSettings["devInfoGitHubUrl"].ToString();
            GeoNetUrl = ConfigurationManager.AppSettings["devInfoGeoNetUrl"].ToString();
        }
    }

    public class ApiInputAddress
    {
        public ApiInputAddress(string address, string city, string stateProv, string postalCode, string country)
        {
            Address = address;
            City = city;
            StateProv = stateProv;
            PostalCode = postalCode;
            Country = country;
            OutputAddresses = new List<ApiOutputAddress>();
        }

        public string Address { get; set; }
        public string City { get; set; }
        public string StateProv { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public IList<ApiOutputAddress> OutputAddresses { get; set; }
    }

    public class ApiOutputAddress
    {
        public string OutputAddress { get; set; }        
        public string OutputCity { get; set; }
        public string OutputStateProv { get; set; }
        public string OutputPostalCode { get; set; }
        public string OutputCountry { get; set; }
        //public string Accuracy { get; set; }
        //public string Precision { get; set; }
        public string Confidence { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Source { get; set; }
    }

    public class IpLocation
    {
        public string IpAddress { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public float Lat { get; set; }
        public float Lon { get; set; }
        public string Isp { get; set; }
        public string Region { get; set; }
        public string Status { get; set; }
        public string TimeZone { get; set; }
        public string PostalCode { get; set; }
    }
    #endregion API

    #region Bing
    public class BingGeocodeOutput
    {
        public string authenticationResultCode { get; set; }
        public string brandLogoUri { get; set; }
        public string copyright { get; set; }
        public IList<BingResourceSet> resourceSets { get; set; }
        public int statusCode { get; set; }
        public string statusDescription { get; set; }
        public string traceId { get; set; }
    }

    public class BingResourceSet
    {
        public int estimatedTotal { get; set; }
        public IList<BingResource> resources { get; set; }
    }

    public class BingResource
    {
        public string __type { get; set; }
        public IList<double> bbox { get; set; }
        public string name { get; set; }
        public BingPoint point { get; set; }
        public BingAddress address { get; set; }
        public string confidence { get; set; }
        public string entityType { get; set; }
        public IList<BingGeocodePoint> geocodePoints { get; set; }
        public IList<string> matchCodes { get; set; }
    }

    public class BingPoint
    {
        public string type { get; set; }
        public IList<double> coordinates { get; set; }
    }

    public class BingAddress
    {
        public string addressLine { get; set; }
        public string adminDistrict { get; set; }
        public string adminDistrict2 { get; set; }
        public string countryRegion { get; set; }
        public string formattedAddress { get; set; }
        public string locality { get; set; }
        public string postalCode { get; set; }
    }

    public class BingGeocodePoint
    {
        public string type { get; set; }
        public IList<double> coordinates { get; set; }
        public string calculationMethod { get; set; }
        public IList<string> usageTypes { get; set; }
    }
    #endregion
}