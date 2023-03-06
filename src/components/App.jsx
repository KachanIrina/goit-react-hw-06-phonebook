import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2> Contacts</h2>

      <ContactFilter />

      <ContactsList />
    </div>
  );
}
