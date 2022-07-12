import * as React from 'react';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { View, Text, Platform, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// LOCAL DEP

let screenWidth = Dimensions.get('window').width;

export default function Body() {
    return (
        <View style={[styles.navContainer, {
            flexDirection: "column"
        }]}>

            <Text style={[styles.mainTxt]}> Our Team Projects </Text>

            <View style={[styles.waveContainer]}>
            <Svg
                height="100%"
                width={screenWidth}
                
                style={{ position: 'absolute'}}
            >
                <Path
                    fill="#04030F"
                    d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,240C672,277,768,299,864,277.3C960,256,1056,192,1152,181.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </Svg>
            </View>

            

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
                textAlign: 'center',
                alignItems: 'center',

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
                flex: 6,
                color: '#000000',
                fontWeight: '900',
                fontSize: 'x-large',
                lineHeight: '100px',
                fontFamily: 'IBM Plex Mono',
                fontStyle: 'normal',
                letterSpacing: '5px'
            }
        })
    },

    waveContainer: {
        ...Platform.select({
            android: {

            },
            default: {
                
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: '-50px',
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

