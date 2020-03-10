using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmartTestNUnit
{
    class TestAccountService
    {
        AccountRepository _accrepo;

        [SetUp]
        public void Setup()
        {
            _accrepo = new AccountRepository(new EmartDBContext());
        }


        [Test]
        [Description("Test BuyerLogin()")]
        public void TestBuyerLogin()
        {
            var result = _accrepo.BuyerLogin("jaga", "jaga");
            Assert.IsNotNull(result);
        }

        [Test]
        [Description("Test SellerLogin()")]
        public void TestSellerLogin()
        {
            var result = _accrepo.SellerLogin("Jaya", "jaya");
            Assert.IsNotNull(result);
        }

        [Test]
        [Description("Test BuyerRegister()")]
        public void TestBuyerRegister()
        {
            _accrepo.BuyerRegister(new Buyer()
            {
                BuyerId = "2",
                UserName = "Lalli",
                Password = "lalli",
                EmailId = "latha21@gmail.com",
                MobileNo = "9183086666",
                CreatedDateTime = DateTime.Now
            });

            var result = _accrepo.BuyerLogin("Latha", "latha");
            Assert.IsNotNull(result);
        }

        [Test]
        [Description("Test SellerRegister()")]
        public void TestSellerRegister()
        {
            _accrepo.SellerRegister(new Seller()
            {
                SellerId = "5",
                UserName = "Roja",
                Password = "roja",
                EmailId = "roja@gmail.com",
                MobileNo = "9666643999",
                CompanyName = "Roja Works",
                Gstin = "A453",
                BriefDetails = "Fine Crafts",
                Website = "Finecrafts.com",
                PostalAddress = "Mumbai"
            });

            var result = _accrepo.SellerLogin("Rani", "rani");
            Assert.IsNotNull(result);
        }



    }
}

