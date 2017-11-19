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

        //url: mfcallahan.com/gallery
        public ActionResult Gallery()
        {
            return View();
        }

        //url: mfcallahan.com/camping
        public ActionResult Camping()
        {
            return View();
        }

        //url: mfcallahan.com/radio
        public ActionResult Radio()
        {
            return View();
        }

        //url: mfcallahan.com/radiomap
        public ActionResult RadioMap()
        {
            return View();
        }

        //url: mfcallahan.com/gmrs
        public ActionResult GMRS()
        {
            return View();
        }

        //url: mfcallahan.com/blog
        public ActionResult Blog()
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