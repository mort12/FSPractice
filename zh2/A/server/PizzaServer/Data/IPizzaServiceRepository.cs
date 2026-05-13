using PizzaServer.Models;

namespace PizzaServer.Data
{
    public interface IPizzaServiceRepository
    {
        void CreatePizza(Pizza pizza);
        IEnumerable<Pizza> ReadPizzas();
        Pizza? ReadPizza(int id);
        void UpdatePizza(Pizza pizza);
        void DeletePizza(int id);
    }
}