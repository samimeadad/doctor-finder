import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Home () {
    return (
        <View>
            <Text>This is Home</Text>
            <TextInput
                style={ {
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                } }
                defaultValue="You can type in me"
            />
            <Button
                onPress={ e => alert( 'Hello' ) }
                title="Press Me"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}
