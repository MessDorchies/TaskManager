import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>
            Task manager
        </Text>
    </View>);
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#404040',
        paddingTop: 80,
        paddingBottom: 40,
        alignSelf: "stretch"
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
    }
})

