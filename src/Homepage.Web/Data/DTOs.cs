using System.Collections.Generic;
using System.Configuration;

#pragma warning disable 1591
namespace Homepage.Dtos
{
    public class ApiResponseRandom
    {
        public string RandomString { get; set; }

        public ApiResponseRandom(string str)
        {
            RandomString = str;
        }
    }

    public class ApiResponseHello
    {
        public string Status { get; set; }
        public string Message { get; set; }

        public ApiResponseHello(string status, string message)
        {
            Status = status;
            Message = message;
        }
    }

    public class ApiResponseBusinessCard
    {
        public string Name { get; set; }
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
            ResumeUrl = ConfigurationManager.AppSettings["devInfoResumeUrl"].ToString();
            LinkedInUrl = ConfigurationManager.AppSettings["devInfoLinkedInUrl"].ToString();
            GitHubUrl = ConfigurationManager.AppSettings["devInfoGitHubUrl"].ToString();
            GeoNetUrl = ConfigurationManager.AppSettings["devInfoGeoNetUrl"].ToString();
        }
    }

    public class ApiResponseGeocode
    {
        public ApiResponseGeocode()
        {

        }

        public ApiResponseGeocode(Bing_GeocodeOutput bing)
        {
            
        }

        public string InputAddress { get; set; }
        public string InputCity { get; set; }
        public string InputStateProv { get; set; }
        public string InputPostalCode { get; set; }
        public string InputCountry { get; set; }

        public string OutputAddress { get; set; }
        public string OutputCity { get; set; }
        public string OutputStateProv { get; set; }
        public string OutputPostalCode { get; set; }
        public string OutputCountry { get; set; }

        public string OutputAccuracy { get; set; }
        public string OutputPrecision { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }

    }

    #region Bing
    public class Bing_GeocodeOutput
    {
        public string authenticationResultCode { get; set; }
        public string brandLogoUri { get; set; }
        public string copyright { get; set; }
        public IList<Bing_ResourceSet> resourceSets { get; set; }
        public int statusCode { get; set; }
        public string statusDescription { get; set; }
        public string traceId { get; set; }
    }

    public class Bing_ResourceSet
    {
        public int estimatedTotal { get; set; }
        public IList<Bing_Resource> resources { get; set; }
    }

    public class Bing_Resource
    {
        public string __type { get; set; }
        public IList<double> bbox { get; set; }
        public string name { get; set; }
        public Bing_Point point { get; set; }
        public Bing_Address address { get; set; }
        public string confidence { get; set; }
        public string entityType { get; set; }
        public IList<Bing_GeocodePoint> geocodePoints { get; set; }
        public IList<string> matchCodes { get; set; }
    }

    public class Bing_Point
    {
        public string type { get; set; }
        public IList<double> coordinates { get; set; }
    }

    public class Bing_Address
    {
        public string addressLine { get; set; }
        public string adminDistrict { get; set; }
        public string adminDistrict2 { get; set; }
        public string countryRegion { get; set; }
        public string formattedAddress { get; set; }
        public string locality { get; set; }
        public string postalCode { get; set; }
    }

    public class Bing_GeocodePoint
    {
        public string type { get; set; }
        public IList<double> coordinates { get; set; }
        public string calculationMethod { get; set; }
        public IList<string> usageTypes { get; set; }
    }
    #endregion

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
}
#pragma warning restore 1591