using Homepage.Dtos;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Configuration;
using System.Linq;
using System.Web.Mvc;
//using Homepage.Queries;

namespace Homepage.Controllers
{
    public class HomeController : Controller
    {
        // mfcallahan.com
        public ActionResult Index()
        {
            return View();
        }

        // mfcallahan.com/gallery
        public ActionResult Gallery()
        {
            return View();
        }

        // mfcallahan.com/camping
        public ActionResult Camping()
        {
            return View();
        }

        // mfcallahan.com/radio
        public ActionResult Radio()
        {
            return View();
        }

        // mfcallahan.com/blog
        public ActionResult Blog()
        {
            return Redirect("https://seesharpdotnet.wordpress.com/");
        }

        [HttpPost]
        public void Hello()
        {
            string ip = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];            

            if (string.IsNullOrEmpty(ip))
                ip = Request.ServerVariables["REMOTE_ADDR"];

            // for testing
            //if (ip == "127.0.0.1" || ip == null)
            //    ip = "8.8.8.8"; //google

            string rawIp = ip;

            if (ip.Contains(':'))
            {
                ip = ip.Split(':')[0];
                ip = ip.Split(',').Last().Trim();
            }               

            string url = Request.Url.GetLeftPart(UriPartial.Authority);

            // disabled becasue SQL serves are expen$ive...
            //HomepageQueries.LogVisitorInfo(ip, rawIp, url);
        }        
    }
}