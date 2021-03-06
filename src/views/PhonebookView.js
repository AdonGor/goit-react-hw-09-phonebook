import { getVisibleContacts } from '../redux//phonebook-selectors';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { useSelector } from 'react-redux';
import Container from '../components/Container';

const styles = {
  section: {
    color: 'white',
    border: ' 2px solid white',
    padding: 10,
    borderRadius: 10,
    background: '#FFC0CB',
  },

  header: {
    color: '#696969',
  },
};

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;
  
  return (
    <Container>
      <h1 style={styles.header}>Телефонная книга</h1>
      <ContactForm />
      <div style={styles.section}>
        <h2>Contacts:</h2>
        <p>Общее кол-во: {totalContactsCount}</p>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}