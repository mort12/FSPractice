namespace PizzaServer.Models
{
    public class Pizza
    {
        private static int _nextId = 1;

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float? Price { get; set; }

        public Pizza()
        {
            Id = _nextId++;
        }
    }
}