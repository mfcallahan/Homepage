﻿using System;
using System.Linq;
using System.Web.Mvc;
using Homepage.Queries;

namespace Homepage.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult TestPage()
        {
            return View();
        }

        [HttpPost]
        public void Hello()
        {
            string ip = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

            if (string.IsNullOrEmpty(ip))
                ip = Request.ServerVariables["REMOTE_ADDR"];

            string rawIp = ip;

            if (ip.Contains(':'))
            {
                ip = ip.Split(':')[0];
                ip = ip.Split(',').Last().Trim();
            }               

            string url = Request.Url.GetLeftPart(UriPartial.Authority);            

            HomepageQueries.LogVisitorInfo(ip, rawIp, url);
        }        
    }
}