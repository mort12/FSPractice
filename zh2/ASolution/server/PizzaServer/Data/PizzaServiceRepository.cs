using PizzaServer.Models;

namespace PizzaServer.Data
{
    public class PizzaServiceRepository : IPizzaServiceRepository
    {
        private readonly PizzaServiceContext _ctx;

        public PizzaServiceRepository(PizzaServiceContext ctx)
        {
            _ctx = ctx;
        }

        public void CreatePizza(Pizza pizza)
        {
            if (pizza == null || ReadPizza(pizza.Id) != null) return;

            _ctx.Pizzas.Add(pizza);
        }

        public IEnumerable<Pizza> ReadPizzas()
        {
            return _ctx.Pizzas.ToList();
        }

        public Pizza? ReadPizza(int id)
        {
            if (id < 1) return null;

            return _ctx.Pizzas.FirstOrDefault(p => p.Id == id);
        }

        public void UpdatePizza(Pizza pizza)
        {
            if (pizza == null) return;

            var existingPizza = _ctx.Pizzas.FirstOrDefault(p => p.Id == pizza.Id);
            if (existingPizza != null)
            {
                existingPizza.Name = pizza.Name;
                existingPizza.Description = pizza.Description ?? existingPizza.Description;
                existingPizza.Price = pizza.Price ?? existingPizza.Price;
            }
        }

        public void DeletePizza(int id)
        {
            if (id < 1) return;

            var pizza = _ctx.Pizzas.FirstOrDefault(p => p.Id == id);
            if (pizza != null)
            {
                _ctx.Pizzas.Remove(pizza);
            }
        }
    }
}