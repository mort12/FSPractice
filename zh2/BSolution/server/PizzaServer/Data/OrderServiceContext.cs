using PizzaServer.Models;

namespace PizzaServer.Data
{
    public class OrderServiceContext
    {
        public List<Order> Orders { get; set; }

        public OrderServiceContext()
        {
            #region Order seeding

            Orders = new List<Order>
            {
                new Order
                {
                    Customer = "Prof. Dr. Gyorgy Eigner",
                    Address = "46 NIK street",
                    Item = "Buffala",
                    Quantity = 1
                },
                new Order
                {
                    Customer = "Miklos Sipos",
                    Address = "8 Fullstack alley",
                    Item = "Prosciutto e banana",
                    Quantity = 2
                },
                new Order
                {
                    Customer = "Norbert Kovesdi",
                    Address = "BA 113",
                    Item = "Diavola",
                    Quantity = 100
                },
                new Order
                {
                    Customer = "Prof. Dr. Zoltan Vamossy",
                    Address = "Release tower",
                    Item = "Quattro Formaggi",
                    Quantity = 8
                },
                new Order
                {
                    Customer = "Dr. habil. Gabor Kertesz",
                    Address = "Buggy square",
                    Item = "Margherita",
                    Quantity = 1
                }
            };

            #endregion
        }
    }
}