import * as React from 'react';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { View, Text, Platform, ScrollView, StyleSheet,Image } from 'react-native';

// LOCAL DEP

//let screenWidth = Dimensions.get('window').width;

export default function Navbar() {
    return (
        <View style={[styles.navContainer, {
            flexDirection: "row"
        }]}>

            <Text style={[styles.mainTxt]}> Full Stack-ing Development</Text>
            <Text style={[styles.subTxt]}> Projects </Text>
            <Text style={[styles.subTxt]}> About Us </Text>
            <Text style={[styles.subTxt]}> Contribute </Text>
            <Image
                style={styles.githubLogo}
                source={{uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',}}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    navContainer: {
        flex: 1,
        ...Platform.select({
            android: {
                flexWrap: "wrap",
                justifyContent: 'space-around',
            },
            default: {
                flexWrap: "wrap",
                justifyContent: 'space-around',
                backgroundColor: 'white',
               
            }
        })
    },
    mainTxt: {
        ...Platform.select({
            android: {
                flex: 3,
                color: '#04030F',
                fontWeight: '400',
                fontSize: 'large',
                lineHeight: '52px',
                fontFamily: 'IBM Plex Mono',
                paddingLeft: '5px',
                fontStyle: 'normal',
            },
            default: {
                flex: 3,
                color: '#04030F',
                fontWeight: '400',
                fontSize: 'large',
                lineHeight: '52px',
                fontFamily: 'IBM Plex Mono',
                paddingLeft: '5px',
                fontStyle: 'normal',
               
            }
        })
    },

    subTxt: {
        ...Platform.select({
            android: {
                flex: 1,
                color: '#04030F',
                fontWeight: '400',
                fontSize: 'small',
                lineHeight: '52px',
                fontFamily: 'IBM Plex Mono',
                fontStyle: 'normal',
                flexWrap: "wrap",
                justifyContent: 'space-between',
            },
            default: {
                flex: 1,
                color: '#04030F',
                fontWeight: '400',
                fontSize: 'small',
                lineHeight: '52px',
                fontFamily: 'IBM Plex Mono',
                fontStyle: 'normal',
                flexWrap: "wrap",
                justifyContent: 'space-between',
                cursor: "pointer",
            }
        })
    },

    githubLogo: {
        ...Platform.select({
            android: {
                width: 66,
                height: 58,
            },
            default: {
               
                width: 66,
                height: 58,
                cursor: "pointer",
            }
        })
    }
});

