import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, 
    CheckBox, TouchableOpacity, TextInput} 
    from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:'',
            nameValidate: true,
            passwordValidate: true
        }
    }
    validate(text, type) {
        alph = /^[a-zA-Z]+$/
        num = /^[0-9]+$/
        if (type=='username') {
            if (alph.test(text)) {
                //console.warn("text is correct")
                this.setState({
                    nameValidate: true,
                })
            } else {
                //console.warn("invalid text")
                this.setState({
                    nameValidate: false,
                })
            }
        } else if (type=='password') {
            if (num.test(text)) {
                //console.warn("text is correct")
                this.setState({
                    passwordValidate: true,
                })
            } else {
                //console.warn("invalid text")
                this.setState({
                    passwordValidate: false,
                })
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={[styles.inputStyles, !this.state.nameValidate? styles.error:styles.noError]} 
                onChangeText={(text)=>this.validate(text,'username')}
                placeholder="Username"></TextInput>
                <TextInput style={[styles.inputStyles, !this.state.passwordValidate? styles.error:styles.noError]} 
                onChangeText={(text)=>this.validate(text,'password')}
                placeholder="Password"></TextInput>
                <TouchableOpacity>
                    <Text style={styles.btnText} >LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btnSignUp} >Not a Member? Sign up Now.</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        backgroundColor:'#2196F3',
        flex:1,
        paddingLeft:30,
        paddingRight:30
    },
    inputStyles:{
        backgroundColor:'#ffffff',
        marginBottom: 15,
        fontSize:18,
        paddingLeft:15
    },
    btnText:{
        textAlign:'center',
        backgroundColor:'#90CAF9',
        paddingBottom: 10,
        paddingTop:10,
        fontSize:18,
        fontWeight:'bold',
        marginTop:25
    },
    btnSignUp:{
        color:'#90CAF9',
        textAlign:'center',
        marginTop:70,
        fontWeight:'bold'
    },
    error:{
        borderWidth:3,
        borderColor:'#990404'
    },
    noError:{
        borderWidth:0
    }
})