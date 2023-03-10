import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Achievement = ({header, details}) => {
        return (
          <View style={styles.container}>
            <View style={styles.fixedRatio}>
                <Text style={styles.header}>{header}</Text>
                <Text style={styles.details}>{details}</Text>
            </View>
          </View>
        );
      
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 5
    },
    fixedRatio: {
      backgroundColor: '#f0f2f0',
      flex: 1,
      aspectRatio: 16 / 9,
      borderRadius: 20,
        // padding: 10,
        justifyContent: 'space-around',
        paddingLeft:10,
    },
    header: {
      font: 'sans-serif',
      fontSize: 15,
      // fontWeight: 'bold'
    },
    details: {
      font: 'sans-serif',
      fontSize: 35,
      fontWeight: 'bold'
    }
});

export default Achievement;