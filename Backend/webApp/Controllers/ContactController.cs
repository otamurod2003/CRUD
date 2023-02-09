using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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
        public void Post([FromBody] Contact name )
        {
            _context.Contacts.Add(name);
            _context.SaveChanges();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Contact>> Get()
        {
            return _context.Contacts;
        }
    }
}
