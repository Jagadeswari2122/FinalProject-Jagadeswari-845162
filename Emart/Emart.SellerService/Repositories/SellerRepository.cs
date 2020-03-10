using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class SellerRepository:ISellerRepository
    {
        private readonly EmartDBContext _context;
       /// private Emart.SellerService.Models.EmartDBContext emartDBContext;

        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }

        //public SellerRepository(Emart.SellerService.Models.EmartDBContext emartDBContext)
        //{
        //    this.emartDBContext = emartDBContext;
        //}

        public void EditProfile(Seller obj)
        {
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

    
        public Seller GetProfile(string sid)
        {
            return _context.Seller.Find(sid);

        }

       
    }
}
