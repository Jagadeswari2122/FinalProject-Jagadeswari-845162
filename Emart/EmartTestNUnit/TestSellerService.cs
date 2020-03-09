using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmartTestNUnit
{
    class TestSellerService
    {

        SellerRepository _sellrepo;
        [SetUp]
        public void SetUp()
        {
            _sellrepo = new SellerRepository(new EmartDBContext());
        }
        [Test]
        public void TestEditProfile()
        {
            _sellrepo.EditProfile(new Seller()
            {
      SellerId="1",
      UserName="Pranavi",
      Password="pranavi",
      CompanyName="cts",
      Gstin="1",
      BriefDetails="IT sector",
     PostalAddress="Guntur",
      Website="www.pranavi.com",
      EmailId="pranavi@gmail.com",
      MobileNo="9876567892"
    });
            var result = _sellrepo.GetProfile("1");
            Assert.IsNotNull(result);

        }

        [Test]
        public void TestGetProfile()
        {
            var result = _sellrepo.GetProfile("1");
            Assert.IsNotNull(result);

        }
    }
}
