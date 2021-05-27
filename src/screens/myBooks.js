import React from 'react';
import {Text, View} from 'react-native';

const MyBooks = ()=>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>My Books Screens</Text>
        </View>
    );
};

MyBooks.navigationOptions = {
    title: 'My Books'
};

export default MyBooks;