using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class SettingsController : Controller
    {
        public IActionResult Settings()
        {
            return View();
        }
    }
}
