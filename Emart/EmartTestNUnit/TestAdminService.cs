using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmartTestNUnit
{
     [TestFixture]
        public class TestAdminService
        {

            AdminRepository _adminrepo;
            [SetUp]
            public void SetUp()
            {
                _adminrepo = new AdminRepository(new EmartDBContext());
            }

            [Test]
            [Description("Test AddCategories()")]
            public void TestAddCategories()
            {
                _adminrepo.AddCategories(new Category()
                {
                    CategoryId = "4",
                    CategoryName = "Electronics",
                    BriefDetails = "high Quality"
                });

                var result = _adminrepo.GetCatById("2");
                Assert.IsNotNull(result);
            }

            [Test]
            [Description("Test AddSubCategories()")]
            public void TestAddSubCategories()
            {
                _adminrepo.AddSubCategories(new SubCategory()
                {
                    SubcategoryId = "SC1",
                    SubcategoryName = "TV",
                    CategoryId = "2",
                    BriefDetails = "Sony",
                    Gst = "A456"
                });

                var result = _adminrepo.GetSubCatById("SC1");
                Assert.IsNotNull(result);
            }

            [Test]
            [Description("Test ViewCategories()")]
            public void TestGetCategories()
            {
                var result = _adminrepo.ViewCategories();
                Assert.IsNotNull(result);
            }

            [Test]
            [Description("Test ViewCategories()")]
            public void TestViewCategories()
            {
                var result = _adminrepo.ViewCategories();
                Assert.IsNotNull(result);
            }

            [Test]
            [Description("Test ViewSubCategories()")]
            public void TestViewSubCategories()
            {
                var result = _adminrepo.ViewSubCategories();
                Assert.IsNotNull(result);
            }

            [Test]
            [Description("Test EditCategories()")]
            public void TestEditCategories()
            {
                _adminrepo.EditCategories(new Category
                {
                    CategoryId = "1",
                    CategoryName = "Dress",
                    BriefDetails = "Lehenga Choli"
                });

                var result = _adminrepo.GetCatById("1");
                Assert.IsNotNull(result);
            }

            [Test]
            [Description("Test EditSubCategories()")]
            public void TestEditSubCategories()
            {
                _adminrepo.EditSubCategories(new SubCategory
                {
                    SubcategoryId = "SC38",
                    SubcategoryName = "Kurthi dress",
                    CategoryId = "2",
                    BriefDetails = "aurelia",
                    Gst = "A123"
                });

                var result = _adminrepo.GetSubCatById("SC38");
                Assert.IsNotNull(result);
            }


            [Test]
            [Description("Test DeleteSubCategories()")]
            public void TestDeleteSubCategories()
            {
                _adminrepo.DeleteSubCategories("SC3");

                var result = _adminrepo.GetSubCatById("SC3");
                Assert.IsNull(result);
            }

            [Test]
            [Description("Test DeleteCategories()")]
            public void TestDeleteCategories()
            {
                _adminrepo.DeleteCategories("4");

                var result = _adminrepo.GetCatById("4");
                Assert.IsNull(result);
            }
        }
    }




    

