using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Purchasehistory
    {
        public int Id { get; set; }
        public int? BuyerId { get; set; }
        public int? SellerId { get; set; }
        public string TransactionType { get; set; }
        public int ItemId { get; set; }
        public int NumberOfItems { get; set; }
        public DateTime DateTime { get; set; }
        public string Remarks { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
