import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Note from './app/note'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      noteArray: [],
      noteText: ''
    }
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date()
      this.state.noteArray.push({
        'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray }),
        this.setState({ noteText: ' ' })
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1)
    this.setState({ noteArray: this.state.noteArray })
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={() => this.deleteNote(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TO DO APP</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder='note'
            placeholderTextColor='#30336b'
            underlineColorAndroid='transparent'
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 70,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#30336b'
  },
  headerText: {
    fontSize: 22,
    color: 'snow',
    fontStyle: 'normal',
    fontWeight: 'bold',
    padding: 22
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    backgroundColor: 'snow',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderTopWidth: 2,
    borderTopColor: '#30336b'
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    zIndex: 8,
    backgroundColor: '#30336b',
    width: 75,
    height: 75,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  addButtonText: {
    color: 'snow',
    fontSize: 24
  }
})
