namespace PizzaServer.Models
{
    public class Order
    {
        private static int _nextId = 1;

        public int Id { get; set; }
        public string Customer { get; set; }
        public string Address { get; set; }
        public int? Quantity { get; set; }
        public string Item { get; set; }

        public Order()
        {
            Id = _nextId++;
        }
    }
}