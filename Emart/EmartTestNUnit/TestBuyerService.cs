using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmartTestNUnit
{

    public class TestBuyerService
    {
        BuyerRepository _buyrepo;
        [SetUp]
        public void SetUp()
        {
            _buyrepo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        public void TestBuyItem()
        {
            _buyrepo.BuyItem(new TransactionHistory()
            {
             
      
                BuyerId="1",
      
               SellerId="1",
      
                TransactionId="1",
      
                ItemId="1",
      
                NumberOfItems="1",
      
                DateTime=DateTime.Now,
      
           
      
               TransactionType="debit"
              
            });
        
        var result = _buyrepo.SearchItems("Tv");
            Assert.NotNull(result);

        }
        [Test]
        public void TestEditProfile()
        {
            _buyrepo.EditProfile(new Buyer()
            {
                BuyerId = "1",

                UserName = "jaga",

                EmailId = "jag@cts.com",


                Password = "jaga",

                MobileNo = "9123456789",


                CreatedDateTime = DateTime.Now
            });
            var result = _buyrepo.GetProfile("1");
            Assert.IsNotNull(result);

        }
        [Test]
        [Description("Test GetCategories()")]
        public void TestGetCategories()
        {
            var result = _buyrepo.GetCategories();
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestGetProfile()
        {
            var result = _buyrepo.GetProfile("1");
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestSearchItems()
        {
            var result = _buyrepo.GetProfile("serum");
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestTransactionHistory()
        {
            var result = _buyrepo.TransactionHistory("1");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestAddtocart()
        {
            _buyrepo.Addtocart(new Cart()
            {


                CartId = "3",
                CategoryId = "3",
                SubcategoryId = "SC15",
                SellerId = "2",
                ItemId = "1569",
                Itemname = "necklace",
                Price = "8888",
                Description = "necklace set",
              
                Image = "jewellary.jpg"
            });
        }
        [Test]
        public void TestDeletefromcart()
        {
            //var result = _buyrepo.Deletefromcart("1");
            //Assert.IsNotNull(result);
        }
        [Test]
        public void TestViewCart()
        {

        }
    }
}
