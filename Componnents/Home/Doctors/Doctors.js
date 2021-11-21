import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Doctor from './Doctor';

export default function Doctors () {
    const [ doctors, setDoctors ] = useState( [] );

    useEffect( () => {
        fetch( 'https://salty-reef-03503.herokuapp.com/doctors' )
            .then( res => res.json() )
            .then( data => setDoctors( data ) );
    }, [] );

    return (
        <ScrollView>
            <Text>Total Doctors: { doctors.length }</Text>
            <ScrollView>
                { doctors.map( doctor => <Doctor
                    key={ doctor._id }
                    doctor={ doctor }
                /> )
                }
            </ScrollView>
        </ScrollView >
    )
}
