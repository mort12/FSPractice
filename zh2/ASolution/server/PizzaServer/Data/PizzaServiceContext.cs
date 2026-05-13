using PizzaServer.Models;

namespace PizzaServer.Data
{
    public class PizzaServiceContext
    {
        public List<Pizza> Pizzas { get; set; }

        public PizzaServiceContext()
        {
            #region Pizza seeding

            Pizzas = new List<Pizza>
            {
                new Pizza
                {
                    Name = "Buffalo Chicken",
                    Description = "Spicy buffalo chicken, blue cheese crumbles, red onions, and mozzarella cheese on a tomato sauce base.",
                    Price = 11.49f,
                },
                new Pizza
                {
                    Name = "Supreme",
                    Description = "A loaded pizza with pepperoni, sausage, bell peppers, onions, mushrooms, olives, tomato sauce, and mozzarella cheese.",
                    Price = 13.99f,
                },
                new Pizza
                {
                    Name = "Sausage Stingray",
                    Description = "A special pizza made with spicy sausage and stingray pieces.",
                    Price = 26.99f,
                },
                new Pizza
                {
                    Name = "Hawaii",
                    Description = "A tropical pizza with ham, pineapple, and mozzarella cheese.",
                    Price = 12.99f,
                },
                new Pizza
                {
                    Name = "Veggie Delight",
                    Description = "A vegetarian pizza loaded with bell peppers, onions, mushrooms, olives, spinach, tomato sauce, and mozzarella cheese.",
                    Price = 7.99f,
                }
            };

            #endregion
        }
    }
}