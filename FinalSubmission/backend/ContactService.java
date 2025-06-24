
import java.awt.Container;
import java.util.HashMap;
import java.util.Map;


public class ContactService {
	// create to store contact 
	private Map<String, ContactService > contacts = new HashMap<>();
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String contactAddress;
	
	public void addContact(ContactService contact) {
		contacts.put(contact.getContactID(), contact);
	}

	
	private String getContactID() {
		// TODO Auto-generated method stub
		return null;
	}


	public void deleteContact(String contactID) {
		contacts.remove(contactID);
	}
	public void updateContact(String contactID, String field, String value) {
		ContactService contact = contacts.get(contactID);
		if(contact != null) {
			switch (field) {
			case "firstName":
				contact.firstName = value;
				break;
			case "lastName":
				contact.lastName = value;
				break;
			case "phoneNumber":
				contact.phoneNumber = value;
				break;
			case "contactAddress":
				contact.contactAddress = value;
				break;
			default:
				// Handle invalid field
			
			}
		}
		
	}
	public ContactService getContact(String contactID) {
		return contacts.get(contactID);
	}
}
