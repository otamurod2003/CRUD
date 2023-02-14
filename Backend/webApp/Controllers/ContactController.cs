using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Xml;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using webApp.Models;

namespace webApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ContactContext _context;
        public ContactController(ContactContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Contact contact)
        {
            try
            {
                _context.Contacts.Add(contact);
                int test = await _context.SaveChangesAsync();

                return Ok(contact);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Contact contact)
        {
            if (id != contact.Id)
                return BadRequest();

            _context.Entry(contact).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(contact);
        }


        [HttpGet]
        public ActionResult<IEnumerable<Contact>> Get()
        {
            try
            {
                return _context.Contacts;
            }
            catch (Exception exasdfsdf)
            {
                return BadRequest(exasdfsdf.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id, Contact contact)
        {
            if (id != contact.Id)
                return BadRequest(contact);
            _context.Entry(contact).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
