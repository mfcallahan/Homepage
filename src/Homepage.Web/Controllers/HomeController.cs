using System;
using System.Linq;
using System.Web.Mvc;
using Homepage.Queries;

#pragma warning disable 1591
namespace Homepage.Controllers
{
    public class HomeController : Controller
    {
        //url: mfcallahan.com
        public ActionResult Index()
        {
            return View();
        }

        //url: mfcallahan.com/WeatherMap
        public ActionResult WeatherMap()
        {
            return View();
        }

        //url: mfcallahan.com/Gallery
        public ActionResult Gallery()
        {
            return View();
        }

        //url: mfcallahan.com/Camping
        public ActionResult Camping()
        {
            return View();
        }

        //url: mfcallahan.com/Radio
        public ActionResult Radio()
        {
            return View();
        }

        [HttpPost]
        public void Hello()
        {
            string ip = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];            

            if (string.IsNullOrEmpty(ip))
                ip = Request.ServerVariables["REMOTE_ADDR"];

            //for testing
            //if (ip == "127.0.0.1" || ip == null)
            //    ip = "8.8.8.8"; //google

            string rawIp = ip;

            if (ip.Contains(':'))
            {
                ip = ip.Split(':')[0];
                ip = ip.Split(',').Last().Trim();
            }               

            string url = Request.Url.GetLeftPart(UriPartial.Authority);

            //disabled becasue SQL serves are expen$ive...
            //HomepageQueries.LogVisitorInfo(ip, rawIp, url);
        }        
    }
}
#pragma warning restore 1591