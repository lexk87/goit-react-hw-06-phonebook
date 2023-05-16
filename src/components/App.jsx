import {
    Container,
    Header,
    ContactForm,
    ContactsTitle,
    Filter,
    ContactList,
    ContactsContainer,
    NoSavedContacts,
    NoFilteredContacts,
} from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getFilter, getContactForm } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const isFormOpened = useSelector(getContactForm);

    const filteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const removeContact = id => {
        setContacts(prevStateContacts =>
            prevStateContacts.filter(contact => contact.id !== id)
        );
    };

    return (
        <>
            <Container>
                <Header />
                {isFormOpened && <ContactForm addContact={addContact} />}

                <ContactsContainer>
                    <ContactsTitle />
                    {contacts.length > 0 && <Filter />}
                    {!contacts.length && <NoSavedContacts />}
                    {contacts.length > 0 && !filteredContacts().length && (
                        <NoFilteredContacts />
                    )}
                    {filteredContacts().length > 0 && (
                        <ContactList
                            contacts={filteredContacts()}
                            removeContact={removeContact}
                        />
                    )}
                </ContactsContainer>
            </Container>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};
