import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import 'react-toastify/dist/ReactToastify.css';
import css from './Form/Form.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      {isLoading && !error && <Loader />}
      <h1>Phone book</h1>
      <Form />
      <h2>Contacts</h2>
      <div className={css.contactsWrap}>
        <Filter />
        <ContactList />
      </div>
      <ToastContainer />
    </div>
  );
};