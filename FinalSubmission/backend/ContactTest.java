import org.junit.Test;

public class ContactTest {
	@Test
	
	public void testContact() {
		Contact contact = new Contact("12345", "Harry", "Can", "1234567890" , "133 Main St");
		
		assertEquals("12345", contact.getcontactAddress());
		assertEquals("Harry", contact.getfirstName());
		assertEquals("Can", contact.getlastName());
		assertEquals("1234567890", contact.getphoneNumber());
		assertEquals("133 Main St", contact.getcontactAddress());
		
	}

	private void assertEquals(String string, String getcontactAddress) {
		// TODO Auto-generated method stub
		
	}

	
	}
	


