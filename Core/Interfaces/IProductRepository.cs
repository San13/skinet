
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(int Id);
        Task<IReadOnlyList<Product>> GetProductsAsync();
        
        Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();
        
        Task<ProductBrand> GetProductBrandByIdAsync(int Id);
        
        Task<IReadOnlyList<ProductType>> GetProductTypesAsync();
        Task<ProductType> GetProductTypeByIdAsync(int Id);
        
     
        
        
    }
}