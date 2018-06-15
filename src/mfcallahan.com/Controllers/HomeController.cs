using System.Web.Mvc;

namespace Homepage.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Radio()
        {
            return View();
        }
        
        public ActionResult Blog()
        {
            return Redirect("https://seesharpdotnet.wordpress.com/");
        }
    }
}