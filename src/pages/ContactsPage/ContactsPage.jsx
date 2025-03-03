import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/contactsSelectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <div>
        <ContactForm />
        {loading && !error && <Loader />}
        {!loading && !error && contacts.length > 0 && <SearchBox />}
        {!loading && !error && contacts.length === 0 && (
          <h2 className={css.noContacts}>You have no contacts!</h2>
              )}
        <SearchBox />
        <ContactList />
      </div>
    </main>
  );
};

export default ContactsPage;