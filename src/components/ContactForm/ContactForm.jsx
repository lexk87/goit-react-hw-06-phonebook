import {
    FormContainer,
    Label,
    Input,
    Error,
    Button,
    LabelTitle,
    Wrapper,
    Info,
} from './ContactForm.styled';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const initialValues = {
    id: '',
    name: '',
    number: '',
};

const schema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .matches(nameRegex, 'Please, enter valid name')
        .required('Name is a required field'),
    number: yup
        .string()
        .matches(numberRegex, 'Please, enter valid number')
        .required('Number is a required field'),
});

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (values, { resetForm }) => {
        values.id = nanoid();

        const isContactIncluded = contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );

        isContactIncluded
            ? toast.warn(`${values.name} is already in contacts`, {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
              })
            : dispatch(addContact(values));

        resetForm();
    };

    return (
        <FormContainer>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <Form autoComplete="off">
                    <Wrapper>
                        <Label htmlFor="name">
                            <LabelTitle>Name</LabelTitle>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            />
                            <Error component="p" name="name" />
                        </Label>

                        <Label htmlFor="number">
                            <LabelTitle>Number</LabelTitle>
                            <Input
                                id="number"
                                type="tel"
                                name="number"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            />
                            <Error component="p" name="number" />
                        </Label>
                    </Wrapper>
                    <Wrapper>
                        <Info>
                            To add a contact to your phonebook, enter the name
                            and phone number in the corresponding fields and
                            click the "Add contact" button. To close this
                            section, click the "Cancel" button.
                        </Info>
                        <Button type="submit">Add contact</Button>
                    </Wrapper>
                </Form>
            </Formik>
        </FormContainer>
    );
};
