import React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const BookView = styled.ScrollView`
    padding: 10px;
`;
const Book = props => {
    return (
        <BookView>
            <Text>{props.book.name}</Text>
            <Text>{props.book.price}</Text>
        </BookView>
    );
};
export default Book;