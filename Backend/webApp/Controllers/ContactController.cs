using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Xml;
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
        public async Task<IActionResult> Post([FromBody] Contact contact )
        {
            _context.Contacts.Add(contact);
           await _context.SaveChangesAsync();

            return Ok(contact);
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
            return _context.Contacts;
        }

    }
}
