using System;
using System.Net;
using Newtonsoft.Json;
using Homepage.Dtos;
using Homepage.Data;

namespace Homepage.Queries
{
    public static class HomepageQueries
    {
        public static void LogVisitorInfo(string ip, string rawIp, string appUrl)
        {          
            var loc = GetIpInfo(ip);

            Visitor v = new Visitor
            {
                VisitTime = DateTime.Now.AddHours(-7), //adjust from Azure UTC
                url = appUrl,
                VisitorIpAddress = ip,
                VisitorRawIp = rawIp
            };

            adhocEntities1 db = new adhocEntities1();

            if (loc != null)
            {
                v.VisitorIsp = loc.Isp;
                v.VisitorCity = loc.City;
                v.VisitorRegion = loc.Region;
                v.VisitorCountry = loc.Country;
                v.VisitorPostalCode = loc.PostalCode;
                v.VisitorLat = loc.Lat;
                v.VisitorLon = loc.Lon;
                v.VisitorTimeZone = loc.TimeZone;                
                v.VisitorRawIp = rawIp;
                v.VisitorName = loc.Name;
            }
           
            db.Visitors.Add(v);
            db.SaveChanges();
        }

        // ip-api: http://ip-api.com/docs/
        public static IpLocation GetIpInfo(string ip)
        {
            if (string.IsNullOrEmpty(ip))            
                return null;
            
            var url = "http://ip-api.com/json/" + ip;
            var client = new WebClient();
            dynamic result = JsonConvert.DeserializeObject(client.DownloadString(url));

            if (result.status == "success")
            {
                var loc = new IpLocation
                {
                    Name = result.@as,
                    IpAddress = ip,
                    Isp = result.isp,
                    City = result.city,
                    Country = result.country,
                    Lat = result.lat,
                    Lon = result.lon,
                    Region = result.region,
                    Status = result.status,
                    TimeZone = result.timezone,
                    PostalCode = result.zip
                };

                return loc;                
            } 

            return null;
        }
    }
}