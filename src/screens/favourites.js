import React from 'react';
import {Text, View} from 'react-native';

const Favourites = ()=>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>My Favourites Screens</Text>
        </View>
    );
};

Favourites.navigationOptions ={
    title: 'Favourites'
};

export default Favourites;