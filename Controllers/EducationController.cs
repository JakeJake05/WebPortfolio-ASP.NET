using Microsoft.AspNetCore.Mvc;


namespace Portfolio.Controllers
{
    public class EducationController : Controller
    {


        // Action to handle the Achievements page
        public IActionResult Achievements(int? id)
        {
            if (id.HasValue)
            {

                return id switch
                {
                    1 => View("Achievements_1"),
                    2 => View("Achievements_2"),
                    _ => View("Achievements")

                };

                #region --Previous Switch--
                /*
                switch (id)
                {
                    case 1:
                        return View("Achievements_1");
                    case 2:
                        return View("Achievements_2");
                    default:
                        return View("Achievements");

                }
                */
                #endregion

            }

            else
            {
                return View("Achievements");
            }

        }
    }
}

