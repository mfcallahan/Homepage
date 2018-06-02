using System;

namespace Homepage.Models
{
    public class Visitor
    {
        public int ID { get; set; }
        public DateTime VisitTime { get; set; }
        public string url { get; set; }
        public string VisitorIsp { get; set; }
        public string VisitorCity { get; set; }
        public string VisitorRegion { get; set; }
        public string VisitorCountry { get; set; }
        public string VisitorPostalCode { get; set; }
        public double? VisitorLat { get; set; }
        public double? VisitorLon { get; set; }
        public string VisitorTimeZone { get; set; }
        public string VisitorIpAddress { get; set; }
        public string VisitorRawIp { get; set; }
        public string VisitorName { get; set; }
    }
}