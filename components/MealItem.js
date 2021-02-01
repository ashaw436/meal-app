import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from  'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                <View style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </View>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <DefaultText>{props.duration}m</DefaultText>
                <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection:'row',
        
    },
    bgImage: {
        width:'100%',
        height: '100%',
        justifyContent: 'flex-end'

    },
    mealItem: {
        height: 200,
        width:'95%',
        backgroundColor:'lightgrey',
        borderRadius:10,
        overflow:'hidden',
        margin:10,
        
        
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height:'15%'

    },
    title: {
        fontSize:18,
        fontFamily: 'open-sans-bold',
        color: 'white',
        
        textAlign: 'center'

    },
    container:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
});

export default MealItem;