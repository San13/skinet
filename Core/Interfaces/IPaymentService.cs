using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;

namespace Core.Interfaces
{
    public interface IPaymentService
    {
         Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId);

         Task<Order> updateOrderPaymentSucceeded(string paymentIntentId);

         Task<Order> updateOrderPaymentfailed(string paymentIntentId);

    }
}