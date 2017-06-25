
using System.Configuration;

namespace Homepage.Dtos
{
    public class ApiResponseHello
    {
        public ApiResponseHello(string status, string message)
        {
            Status = status;
            Message = message;
        }

        public string Status { get; set; }
        public string Message { get; set; }

    }

    public class ApiResponseBusinessCard
    {
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

        public string Name { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string ResumeUrl { get; set; }
        public string LinkedInUrl { get; set; }
        public string GitHubUrl { get; set; }
        public string GeoNetUrl { get; set; }
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
}