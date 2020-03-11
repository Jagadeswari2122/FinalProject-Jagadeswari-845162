using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;
        }

        public void BuyItem(TransactionHistory item)
        {
            _context.TransactionHistory.Add(item);
            _context.SaveChanges();
        }

        public void EditProfile(Buyer bobj)
        {
            _context.Buyer.Update(bobj);
            _context.SaveChanges();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Buyer ViewProfile(string bid)
        {
            return _context.Buyer.Find(bid);
        }


        public List<SubCategory> GetSubCategories(string categoryid)
        {
            return _context.SubCategory.Where(res => res.CategoryId == categoryid).ToList();
        }

        public List<Items> SearchItems(string name)
        {
            return _context.Items.Where(res => res.ItemName == name).ToList();
        }

        public List<Cart> ViewCart(string bid)
        {
            return _context.Cart.Where(res => res.BuyerId == bid).ToList();
        }

        public List<TransactionHistory> TransactionHistory(string bid)
        {
            return _context.TransactionHistory.Where(res => res.BuyerId == bid).ToList();
        }
        public void Addtocart(Cart cartobj)
        {
            _context.Cart.Add(cartobj);
            _context.SaveChanges();
        }

        public void Deletefromcart(string cartid)
        {
            Cart cartobj = _context.Cart.Find(cartid);
            _context.Remove(cartobj);
            _context.SaveChanges();
        }

    }
    
    
    
}
