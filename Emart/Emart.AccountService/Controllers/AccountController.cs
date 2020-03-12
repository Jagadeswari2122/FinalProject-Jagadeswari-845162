using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _iacrepo;

        private readonly IConfiguration configuration;

        public AccountController(IAccountRepository acorepo, IConfiguration configuration)
        {
            _iacrepo = acorepo;
            this.configuration = configuration;

        }
        private string GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult Post(Buyer item)
        {
            try
            {
                _iacrepo.BuyerRegister(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);

            }

        }



        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult Post(Seller item)
        {
            try
            {
                _iacrepo.SellerRegister(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);

            }

        }






   

    [HttpGet]
        [Route("BuyerLogin/{uname}/{pwd}")]

        public IActionResult BuyerLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Buyer buyer = _iacrepo.BuyerLogin(uname, pwd);
                if (buyer != null)
                {
                    token = new Token()
                    {
                        buyerId = buyer.BuyerId,
                        token = GenerateJwtToken(uname),
                        msg = "success"
                    };
                }
                else
                {
                    token = new Token()
                    {
                        token = "",
                        msg = "unsuccess"
                    };
                }
                return Ok(token);
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("SellerLogin/{uname}/{pwd}")]

        public IActionResult SellerLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Seller seller = _iacrepo.SellerLogin(uname, pwd);
                if (seller != null)
                {
                    token = new Token()
                    {
                   sellerId = seller.SellerId,
                   
                        token = GenerateJwtToken(uname),

                        msg = "success"
                    };
                }
                else
                {
                    token = new Token()
                    {
                        token = "",
                        msg = "unsuccess"
                    };
                }
                return Ok(token);
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}




