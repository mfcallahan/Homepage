﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MattWeb.Models
{
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