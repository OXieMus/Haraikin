import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Postcard(props) {
    return (
        <View style={styles.Cardcontainer}>
                <Image style={styles.imgfream} source={{ uri: props.image }} />
                <View style={styles.Cardcontent}>
                    <Text>{props.name}</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Cardcontainer: {
        backgroundColor: '#C1BFA9',
        borderRadius: 15,
        elevation: 5,
        marginBottom: 20,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
            width: 3
        },
        flexDirection: 'column',
        padding: 15,
        alignItems: 'center',
        height: '30%',
        width: '45%'
        
    },
    imgfream: {
        resizeMode: 'cover',
        borderRadius: 10,
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    Cardcontent: {
        paddingTop: 10,
        
    }
});