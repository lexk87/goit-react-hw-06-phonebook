import {
    Container,
    Header,
    ContactForm,
    ContactsTitle,
    ContactList,
    ContactsContainer,
} from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContactForm } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
    const isFormOpened = useSelector(getContactForm);

    return (
        <>
            <Container>
                <Header />
                {isFormOpened && <ContactForm />}

                <ContactsContainer>
                    <ContactsTitle />
                    <ContactList />
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
