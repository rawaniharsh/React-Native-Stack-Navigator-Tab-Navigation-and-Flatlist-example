import React from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Book from './Book';


const Books = [
    {
        id: 1,
        name: "R.S Agarwal Class 11 Math Book",
        price: "Rs. 50"
    },
    {
        id: 2,
        name: "R.D sharma Class 12 Math Book",
        price: "Rs. 40"
    },
    {
        id: 3,
        name: "K.C verma Class 10 Chemistry Book",
        price: "Rs. 80"
    },
    {
        id: 4,
        name: "Railway NTPC Exam Book",
        price: "Rs. 10"
    },
    {
        id: 5,
        name: "UPSC Mains Book",
        price: "Rs. 120"
    },
    {
        id: 6,
        name: "LLP Exam Prepapration Book",
        price: "Rs. 120"
    },
    {
        id: 7,
        name: "Dinesh Class 11 Physics Book",
        price: "Rs. 120"
    }
];

const BookFeed = props => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={Books}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={()=><Separator/>}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate('Book', {
                            id: item.id
                        })
                    }
                >
                    <ContentView>
                        <Book book={item} />
                    </ContentView>
              </TouchableOpacity>
                )
                
            }
            />
        </View>
    );
};

const ContentView = styled.View`
height: 100;
overflow: hidden;
margin-bottom: 10px;
`;

const Separator = styled.View`
height: 1;
width: 100%;
background-color: #ced0ce;
`;

export default BookFeed;