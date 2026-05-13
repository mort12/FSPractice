using Microsoft.AspNetCore.Mvc;
using PizzaServer.Data;
using PizzaServer.Models;

namespace PizzaServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PizzaApiController : ControllerBase
    {
        IPizzaServiceRepository _repository;
        public PizzaApiController(IPizzaServiceRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Pizza> GetPizzas()
        {
            return _repository.ReadPizzas();
        }

        [HttpPost]
        public void CreatePizza([FromBody] Pizza pizza)
        {
            _repository.CreatePizza(pizza);
        }

        [HttpPut]
        public void UpdatePizza([FromBody] Pizza pizza)
        {
            _repository.UpdatePizza(pizza);
        }

        [HttpDelete("{id}")]
        public void DeletePizza(int id)
        {
            _repository.DeletePizza(id);
        }
    }
}
