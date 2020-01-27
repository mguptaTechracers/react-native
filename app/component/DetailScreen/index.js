/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPressOnGoBack() {
        const { goBack } = this.props.navigation;
        goBack('home');
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.sectionContainer} >
                <Text style={styles.sectionTitle}>This is Detail Screen</Text>
                <Button
                    title="Go Back "
                    onPress={() => goBack()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 100,
        paddingHorizontal: 24,
        alignSelf: "center",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    button: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
});

export default Detail;
