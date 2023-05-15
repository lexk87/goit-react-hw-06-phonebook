import {
    FilterContainer,
    FilterLabel,
    FilterInput,
    LabelInfo,
} from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(getFilter);

    const onFilterChange = e => {
        dispatch(setFilter(e.currentTarget.value.trim()));
    };

    return (
        <FilterContainer>
            <FilterLabel htmlFor="filter">
                <LabelInfo>Find contacts by name</LabelInfo>
                <FilterInput
                    id="filter"
                    type="text"
                    name="filter"
                    value={filterValue}
                    onChange={onFilterChange}
                />
            </FilterLabel>
        </FilterContainer>
    );
};
