using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public class AccountRepository : IAccountRepository
    {

        private readonly EmartDBContext _context;
        public AccountRepository(EmartDBContext context)
        {
            _context = context;
        }


        public Buyer BuyerLogin(string uname, string pswd)
        {

            return _context.Buyer.SingleOrDefault(p => p.UserName == uname && p.Password == pswd);


        }

        public Seller SellerLogin(string uname, string pswd)
        {

            return _context.Seller.SingleOrDefault(p => p.UserName == uname && p.Password == pswd);
        }
        public void BuyerRegister(Buyer buyerobj)
        {
            _context.Add(buyerobj);
            _context.SaveChanges();
        }

      
        public void SellerRegister(Seller sellerobj)
        {
            _context.Add(sellerobj);
            _context.SaveChanges();
        }
    }
}
