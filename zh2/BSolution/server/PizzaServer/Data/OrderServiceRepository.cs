using PizzaServer.Models;

namespace PizzaServer.Data
{
    public class OrderServiceRepository : IOrderServiceRepository
    {
        private readonly OrderServiceContext _ctx;

        public OrderServiceRepository(OrderServiceContext ctx)
        {
            _ctx = ctx;
        }

        public void CreateOrder(Order order)
        {
            if (order == null || ReadOrder(order.Id) != null) return;

            _ctx.Orders.Add(order);
        }

        public IEnumerable<Order> ReadOrders()
        {
            return _ctx.Orders.ToList();
        }

        public Order? ReadOrder(int id)
        {
            if (id < 1) return null;

            return _ctx.Orders.FirstOrDefault(o => o.Id == id);
        }

        public void UpdateOrder(Order order)
        {
            if (order == null) return;

            var existingOrder = _ctx.Orders.FirstOrDefault(o => o.Id == order.Id);
            if (existingOrder != null)
            {
                existingOrder.Customer = order.Customer;
                existingOrder.Address = order.Address;
                existingOrder.Item = order.Item ?? existingOrder.Item;
                existingOrder.Quantity = order.Quantity ?? existingOrder.Quantity;
            }
        }

        public void DeleteOrder(int id)
        {
            if (id < 1) return;

            var existingOrder = _ctx.Orders.FirstOrDefault(o => o.Id == id);
            if (existingOrder != null)
            {
                _ctx.Orders.Remove(existingOrder);
            }
        }
    }
}