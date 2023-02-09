using Microsoft.EntityFrameworkCore;
using webApp.Models;

namespace webApp
{
    public class ContactContext: DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options): base(options) 
        {
            
        }
        public DbSet<Contact> Contacts { get; set; }
        
    }
}
