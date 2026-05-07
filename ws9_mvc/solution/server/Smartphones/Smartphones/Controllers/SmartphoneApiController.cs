using Microsoft.AspNetCore.Mvc;
using Smartphones.Data;
using Smartphones.Models;

namespace Smartphones.Controllers
{
    public class SmartphoneApiController : Controller
    {
        ISmartphoneRepository _repository;

        public SmartphoneApiController(ISmartphoneRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult List()
        {
            return View(_repository.ReadAll());
        }


        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Smartphone smartphone)
        {
            _repository.Create(smartphone);
            return RedirectToAction(nameof(List));
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            _repository.Delete(id);
            return RedirectToAction(nameof(List));
        }
    }
}