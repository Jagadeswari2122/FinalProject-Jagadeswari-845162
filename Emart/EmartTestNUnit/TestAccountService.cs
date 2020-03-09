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
                BuyerId = "5",
                UserName = "Latha",
                Password = "latha",
                EmailId = "latha@gmail.com",
                MobileNo = "9183086775",
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
                SellerId = "6",
                UserName = "Rani",
                Password = "rani",
                EmailId = "ranii@gmail.com",
                MobileNo = "9666643876",
                CompanyName = "Vamsi Civils",
                Gstin = "A789",
                BriefDetails = "Good Products",
                Website = "VamsiGoods.com",
                PostalAddress = "Guntur"
            });

            var result = _accrepo.SellerLogin("Rani", "rani");
            Assert.IsNotNull(result);
        }



    }
}

