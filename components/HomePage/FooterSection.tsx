import * as React from 'react';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { View, Text, Platform, ScrollView, StyleSheet, Image } from 'react-native';

// LOCAL DEP

//let screenWidth = Dimensions.get('window').width;

export default function Footer() {
    return (
        <View style={[styles.navContainer, {
            flexDirection: "row"
        }]}>
            <View style={[styles.txtContainer, {
                flexDirection: "column"
            }]}>

            <View style={[styles.txtBox]}>

                <Text style={[styles.mainTxt]}> Facere
                    <Image
                        style={styles.githubLogo}
                        source={{ uri: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2019/04/GitHub-Mark.png', }}
                    />
                </Text>

                <Text style={[styles.subTxt]}> Facere is a project that does blah blah. Blah blah. </Text>
            </View>
            </View>

            <View style={[styles.txtContainer, {
                flexDirection: "column"
            }]}>

                <View style={[styles.txtBox]}>

                    <Text style={[styles.mainTxt]}> Other project
                        <Image
                            style={styles.githubLogo}
                            source={{ uri: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2019/04/GitHub-Mark.png', }}
                        />
                    </Text>

                    <Text style={[styles.subTxt]}> More to come </Text>
            
                </View>
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
                justifyContent: 'center',

            }
        })
    },
    txtContainer: {
        flex: 1,
        ...Platform.select({
            android: {
                flexWrap: "wrap",
                justifyContent: 'space-around',
            },
            default: {
                flexWrap: "wrap",
                justifyContent: 'center',
                padding: '20px',
                
            }
        })
    },
    txtBox: {
      
        ...Platform.select({
            android: {
                flexWrap: "wrap",
                justifyContent: 'space-around',
            },
            default: {
                
                padding: '10px',
                border: '2px solid white',
                borderRadius:'15% 5vw',
                height: '300px',
                width: '75%',
                alignSelf: ' center',
                
            }
        })
    },
    mainTxt: {
        ...Platform.select({
            android: {
                flex: 1,
                color: '#04030F',
                fontWeight: '400',
                fontSize: 'large',
                fontFamily: 'IBM Plex Mono',
                fontStyle: 'normal',
            },
            default: {

                color: '#FFFFFF',
                fontWeight: '400',
                fontSize: 'large',
                lineHeight: '52px',
                fontFamily: 'IBM Plex Mono',
                paddingLeft: '5px',
                fontStyle: 'normal',
                padding: '10px'
            }
        })
    },

    subTxt: {
        ...Platform.select({
            android: {
                flex: 3,
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
                flex: 2,
                color: '#FFFFFF',
                fontWeight: '400',
                fontSize: 'small',
                lineHeight: '52px',
                fontFamily: 'IBM Plex Mono',
                fontStyle: 'normal',
                flexWrap: "wrap",
                justifyContent: 'space-between',
                cursor: "pointer",
                paddingLeft: '10px',
                padding: '10px'

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

                width: 30,
                height: 30,
                cursor: "pointer",
                top: 0,
                alignItems: 'center',
                borderRadius: '20%',
                marginLeft: '10px',

            }
        })
    }
});

