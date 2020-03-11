using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> SearchItems(string name);
        void BuyItem(TransactionHistory item);
        void EditProfile(Buyer bobj);

        Buyer ViewProfile(string bid);
        List<TransactionHistory> TransactionHistory(string bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string categoryid);

        void Addtocart(Cart cartobj);

        void Deletefromcart(string cartid);
        List<Cart> ViewCart(string bid);


    }
}
