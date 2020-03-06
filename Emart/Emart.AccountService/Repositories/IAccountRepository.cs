using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public interface IAccountRepository
    {
      
        void SellerRegister(Seller sellerobj);

        void BuyerRegister(Buyer buyerobj);
        Buyer BuyerLogin(string uname, string pswd);
        Seller SellerLogin(string uname, string pswd);
    }

}
