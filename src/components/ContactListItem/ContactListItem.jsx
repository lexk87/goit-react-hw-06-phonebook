import PropTypes from 'prop-types';
import {
    Item,
    IconWrapper,
    ContactIcon,
    RemoveContactBtn,
    RemoveContactIcon,
    ContactName,
    ContactPhoneNumber,
} from './ContactListItem.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const removeContact = id => {
        dispatch(deleteContact(id));
    };

    return (
        <Item>
            <IconWrapper>
                <ContactIcon />
                <RemoveContactBtn
                    type="button"
                    title="Remove contact"
                    onClick={() => removeContact(id)}
                >
                    <RemoveContactIcon />
                </RemoveContactBtn>
            </IconWrapper>
            <ContactName>{name}</ContactName>
            <ContactPhoneNumber>{number}</ContactPhoneNumber>
        </Item>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
};
