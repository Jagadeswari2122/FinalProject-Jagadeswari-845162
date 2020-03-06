using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _isellrepo;
        public SellerController(ISellerRepository sellrepo)
        {
            _isellrepo = sellrepo;
        }
        [HttpPost]
        [Route("EditProfile/{obj}")]
        public IActionResult EditProfile(Seller obj)
        {
            try
            {
                _isellrepo.EditProfile(obj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);

            }
        }

        [HttpGet]
        [Route("GetProfile/{sid}")]
        public IActionResult GetProfile(string sid)
        {
            try
            {
                _isellrepo.GetProfile(sid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);

            }
        }

    }
}