using System.Web.Mvc;

namespace Homepage.Controllers
{
    public class HomeController : Controller
    {
        // mfcallahan.com 
        public ActionResult Index()
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
    }
}