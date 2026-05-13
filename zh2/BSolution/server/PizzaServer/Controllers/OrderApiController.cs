using Microsoft.AspNetCore.Mvc;
using PizzaServer.Data;
using PizzaServer.Models;

namespace PizzaServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderApiController : ControllerBase
    {
        IOrderServiceRepository _repository;
        public OrderApiController(IOrderServiceRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            return _repository.ReadOrders();
        }

        [HttpPost]
        public void CreateOrder([FromBody] Order order)
        {
            _repository.CreateOrder(order);
        }

        [HttpPut]
        public void UpdateOrder([FromBody] Order order)
        {
            _repository.UpdateOrder(order);
        }

        [HttpDelete("{id}")]
        public void DeleteOrder(int id)
        {
            _repository.DeleteOrder(id);
        }
    }
}