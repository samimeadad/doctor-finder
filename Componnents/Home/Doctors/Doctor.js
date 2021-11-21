import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create( {
    doctorName: {
        color: "goldenrod",
        fontSize: 24,
        fontWeight: 'bold'
    }
} )

export default function Doctor ( { doctor } ) {
    const { name, email, image } = doctor;
    return (
        <View>
            <Image
                source={ { uri: `data:image/png;base64,${ image }`, } }
                style={ { width: 200, height: 300 } }
            />
            <Text style={ styles.doctorName }>{ name }</Text>
            <Text>{ email }</Text>
        </View>
    )
}
