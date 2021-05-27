import React from 'react';
import {Button, Text, View} from 'react-native';
import BookFeed from '../components/BookFeed'

const Feeds = props=>{
    return(
        <View style={{flex:1}}>
           <BookFeed navigation={props.navigation} />
        </View>
    );
};

Feeds.navigationOptions ={
    title: 'Feeds'
};

export default Feeds;