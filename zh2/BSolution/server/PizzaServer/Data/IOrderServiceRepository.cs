using PizzaServer.Models;

namespace PizzaServer.Data
{
    public interface IOrderServiceRepository
    {
        void CreateOrder(Order order);
        IEnumerable<Order> ReadOrders();
        Order? ReadOrder(int id);
        void UpdateOrder(Order order);
        void DeleteOrder(int id);
    }
}