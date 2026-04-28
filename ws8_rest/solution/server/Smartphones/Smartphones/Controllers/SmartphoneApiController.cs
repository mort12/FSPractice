using Microsoft.AspNetCore.Mvc;
using Smartphones.Data;
using Smartphones.Models;

namespace Smartphones.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SmartphoneApiController : ControllerBase
    {
        ISmartphoneRepository _repository;

        public SmartphoneApiController(ISmartphoneRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Smartphone> GetSmartphones()
        {
            return _repository.ReadAll();
        }

        [HttpGet("{id}")]
        public Smartphone? GetSmartphone(int id)
        {
            return _repository.Read(id);
        }

        [HttpPost]
        public void CreateSmarthpone([FromBody] Smartphone smartphone)
        {
            _repository.Create(smartphone);
        }

        [HttpPut]
        public void UpdateSmarthpone([FromBody] Smartphone smartphone)
        {
            _repository.Update(smartphone);
        }

        [HttpDelete("{id}")]
        public void DeleteSmarthpone(int id)
        {
            _repository.Delete(id);
        }
    }
}