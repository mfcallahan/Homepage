using System;
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

            HomepageQueries.LogVisitorInfo(ip, rawIp, url);
        }        
    }
}