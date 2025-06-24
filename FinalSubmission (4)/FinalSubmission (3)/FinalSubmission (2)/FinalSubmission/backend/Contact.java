package contactApp;

public class Contact { // public class of all requirements
	private String contactID;
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String contactAddress;
	
	public Contact(String contactID,String firstName,String lastName, String phoneNumber, String contactAddress) {
		this.contactID = contactID = 123;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.contactAddress = contactAddress;
	}
	
	// getters 
	
	public String getConstactID() {
		return contactID;
	}

	public String getfirstName() {
		return firstName;
	}	
	public String getlastName() {
		return lastName;
	}
	public String getphoneNumber() {
		return phoneNumber;
	}
	public String getcontactAddress() {
		return contactAddress;
		}
	
	}
