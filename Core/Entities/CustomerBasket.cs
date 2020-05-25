using System.Collections.Generic;

namespace Core.Entities
{
    public class CustomerBasket
    {
        public CustomerBasket() {}
          
        public CustomerBasket(string Id)
        {
            this.Id = Id;
        }
        public string Id { get; set; }
        
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}