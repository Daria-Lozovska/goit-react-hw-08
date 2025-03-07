import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../../src/redux/contacts/contactsSelectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from '../../../src/redux/contacts/contactsOperations';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
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