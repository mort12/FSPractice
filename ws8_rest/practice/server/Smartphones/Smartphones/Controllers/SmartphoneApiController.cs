using Microsoft.AspNetCore.Mvc;
using Smartphones.Data;
using Smartphones.Models;

namespace Smartphones.Controllers
{
    public class SmartphoneApiController : ControllerBase
    {
        ISmartphoneRepository _repository;

        public SmartphoneApiController(ISmartphoneRepository repository)
        {
            _repository = repository;
        }


    }
}