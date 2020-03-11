using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        public readonly IBuyerRepository _ibuyrepo;
        public BuyerController(IBuyerRepository buyrepo)
        {
            _ibuyrepo = buyrepo;
        }
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult SearchItems(string name)
        {
            try
            {

                return Ok(_ibuyrepo.SearchItems(name));

            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }


        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(TransactionHistory item)
        {
            try
            {
                _ibuyrepo.BuyItem(item);
                return Ok();

            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

        [HttpPut]
        [Route("EditProfile/{bobj}")]
        public IActionResult EditProfile(Buyer bobj)
        {
            try
            {
                _ibuyrepo.EditProfile(bobj);
                return Ok();

            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }


        [HttpGet]
        [Route("ViewProfile/{bid}")]

        public IActionResult ViewProfile(string bid)
        {
            try
            {
                return Ok(_ibuyrepo.ViewProfile(bid));
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet]
        [Route("TransactionHistory/{bid}")]
        public IActionResult TransactionHistory(string bid)
        {
            try
            {
                _ibuyrepo.TransactionHistory(bid);
                return Ok();

            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {

                return Ok(_ibuyrepo.GetCategories());

            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategories/{catid}")]
        public IActionResult GetSubCategories(string catid)
        {
            try
            {

                return Ok(_ibuyrepo.GetSubCategories(catid));

            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpPost]
        [Route("Addtocart")]

        public IActionResult Addtocart(Cart cartobj)
        {
            try
            {
                _ibuyrepo.Addtocart(cartobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete]
        [Route("Deletefromcart/{cartid}")]
        public IActionResult Deletefromcart(string cartid)
        {
            try
            {
                _ibuyrepo.Deletefromcart(cartid);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewCart/{bid}")]
        public IActionResult ViewCart(string bid)
        {
            try
            {

                return Ok(_ibuyrepo.ViewCart(bid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}
