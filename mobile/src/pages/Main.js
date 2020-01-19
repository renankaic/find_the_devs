import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {

    const [currentRegion, setCurrentRegion ] = useState(null);

    useEffect(() => {

        async function loadInitialPosition() {

            const { granted } = await requestPermissionsAsync();

            if (granted) {

                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }

        }

        loadInitialPosition();

    }, []);

    if (!currentRegion) {
        return null;
    }

    return ( 
        <MapView initialRegion={currentRegion} style={styles.map}> 
            <Marker coordinate={{ latitude: -22.7505755, longitude: -47.6016348 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/26421325?s=400&u=7fd8f43279c50741ef0d6b2a8a7f151c28b72d4b&v=4' }} />

                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'renankaic' })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Renan Kaic Lopes</Text>
                        <Text style={styles.devBio}>System Analyst at Hyundai AutoEver Brazil. In love with programming</Text>
                        <Text style={styles.devTechs}>React, React Native, NodeJS</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },

    callout: {
        width: 260
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    devBio: {
        color: '#666',
        fontSize: 16
    },

    devTechs: {
        marginTop: 5
    }
})

export default Main;