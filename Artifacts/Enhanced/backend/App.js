
import React, {useState, useEffect} from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
 const [filter, setFilter]=useState('');
  const [editContact, setEditContact]=useState(null);

  useEffect(() => {
    fetch('http://localhost:3002/api/contacts')
    .then(res => res.json())
    .then(data => setContacts(data))
    .catch(err => console.error('Fetch error:', err));

  }, []);




  const handleDelete = async (id) => {

    if(!window.confirm('Are you sure you want to delete this contact?')) {
      return; 
    }
  
  
    try {
      const res = await fetch(`http://localhost:3002/api/contacts/${id}`, {
        method: 'DELETE',

      });

      if(!res.ok) {
        throw new Error('Failed to delete contact');
      }
      setContacts(prev=> prev.filter(contact => contact.id !==id));
      alert('Contact deleted succesfully');
    } catch (err) {
      console.error('Error deleting contacts:', err);
      alert('Error deleting contact. Please try again.');
    }
  };

  const handleEdit = (contact) => {
    setEditContact(contact);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email =e.target.email.value;

    

try {
      const res = await fetch(`http://localhost:3002/api/contacts/${editContact.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({name, email}),


    });

    if (!res.ok) throw new Error('Failed to update contact');

    setContacts(prev =>
      prev.map((contact) =>
        contact.id === editContact.id ? {...contact, name, email} : contact
      )
    );

    setEditContact(null);
  }catch (err) {
    console.error('Error updating contact:', err);
    alert('Error updating contact!');
  }
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase(). includes(filter.toLowerCase()) ||
    c.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{padding:20}}>
      <h1>User Dashboard - Contacts</h1>
      <input
      placeholder="Filter by name or email"
      value={filter}
      onChange={e => setFilter(e.target.value)}
      style={{marginBottom: 10, padding: 5, width: '300px'}}
      />


    <h2>Add New Contact</h2>
    <form
    onSubmit={async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;

      if (!name || !email) {
      alert('Both fields are required!');
      return;
    }

    try {
      const res = await fetch('http://localhost:3002/api/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email})
      });

      const newContact = await res.json();
      setContacts(prev => [...prev, newContact]);
      e.target.reset();
    } catch (err) {
      console.error('Error adding contact:', err);
    }
    }}
    >
      <input name="name" placeholder="Name" style={{marginRight: 10}} />
      <input name="email" placeholder="Email" style={{marginRight: 10}} />
      <button type="submit">Add</button>
    </form>

      <table border="1" cellPadding="10" style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
              <button 
              onClick={() => handleEdit(contact)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}
               style={{color:'red'}}
               >
            Delete
            </button>
            </td>
            </tr>
          ))}
          </tbody>
          </table>

          {editContact && (
            <div>
              <h2>Edit Contact</h2>
              <form onSubmit={handleEditSubmit}>
                <input
                type="text"
                name="name"
                defaultValue={editContact.name}
                required
                style={{marginRight: 10}}
                />
                <input
                type="text"
                name="email"
                defaultValue={editContact.email}
                required
                style={{marginRight: 10}}
                />
                <button type="submit">Update Contact</button>
                </form>
          </div>
          )}


</div> 
  );
}
export default App;