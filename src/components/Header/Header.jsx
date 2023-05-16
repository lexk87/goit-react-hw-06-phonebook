import { HeaderContainer, HeaderTitle, NewContactBtn } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactForm } from 'redux/selectors';
import { toggleForm } from 'redux/contactFormSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const formVisibility = useSelector(getContactForm);

    const toggle = () => {
        dispatch(toggleForm());
    };

    return (
        <HeaderContainer>
            <HeaderTitle>PHONEBOOK</HeaderTitle>
            <NewContactBtn type="button" onClick={toggle}>
                {formVisibility ? 'Cancel' : '+ New contact'}
            </NewContactBtn>
        </HeaderContainer>
    );
};
