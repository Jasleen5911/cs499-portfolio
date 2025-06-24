

import org.junit.Test;
import static org.junit.Assert.*;

import org.junit.ContactService;

public class ContactServiceTest {
	
	@Test
	
	public void testAddContact() {
		Contact contact = new Contact("12345", "Harry", "Can", "1234567890" , "133 Main St");
		
		
		 Object contactService;
		((Object) contactService).addContact(contact);
		assertEquals(contact, contactService).getContact("12345");
		
}
	
	




	@Test
	
	public void testDeleteContact() {
		ContactService contactService = new ContactService();
		Contact contact = new contacts.get("12345", "Harry", "Can", "1234567890" , "133 Main St");
		
		
		contactService.addContact(contact);
		contactService.deleteContact("12345");
		
		assertNull(contactService.getContact("12345"));
		
	}
	@Test
	
	public void testUpdateContact() {
		ContactService contactService = new ContactService();
		Contact contact = new Contact("12345", "Harry", "Can", "1234567890" , "133 Main St");
		
		contactService.addContact(contact);
	contactService.updateContact("12345", "firstName" , "Jane");
	
	assertEquals("Jane", contactService.getContact("12345"). getfirstName());
		
	}
}
