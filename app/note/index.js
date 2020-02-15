import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Note extends Component {
    render() {
        console.log(this.props.val.note)
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText} >{this.props.val.date}</Text>
                <Text style={styles.noteText} >{this.props.val.note}</Text>
                <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#30336b'
    },
    noteText: {
        borderLeftWidth: 10,
        paddingLeft: 26,
        borderLeftColor: 'black',
        color: 'black'
    },
    noteDelete: {
        position: 'absolute',
        backgroundColor: '#30336b',
        padding: 10,
        top: 10,
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
    },
    noteDeleteText: {
        color: 'snow'
    }
})