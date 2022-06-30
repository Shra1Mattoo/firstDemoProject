import React, { useEffect } from "react";
import { ScrollView,View, StyleSheet, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge, setQuote, QUOTE } from "../Redux-THUNK/actions";

export default function Login({ navigation }) {

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const poem = useSelector(state => state.userReducer.quote);


    return (
        <SafeAreaView style={styles.container} >

            
                <View style={styles.ReduxText}>
                    <Text style={styles.ReduxText1}>Redux</Text>
                    <Text style={styles.ReduxText2}>THUNK </Text></View>
                    <ScrollView >
                <TextInput style={styles.Name} placeholderTextColor={'grey'} placeholder="Enter name....."
                    onChangeText={(value) => dispatch(setName(value))

                    }
                />
                <TextInput style={styles.Age} keyboardType={"numeric"} placeholderTextColor={'grey'} placeholder="Enter Age......"
                    onChangeText={(value) => dispatch(setAge(value))}
                />
                <View style={styles.QuoteContainer}>

                    <Button
                        title="Load Quote" onPress={() => { dispatch(setQuote()) }} />
                    {poem.map(item => (
                        <Text style={styles.QuoteText}>{item.quote}</Text>

                    ))}
                </View>
                <View style={styles.OutContainer}>
                    <View>
                        <Text style={styles.TextName}>Name Output is below:</Text>
                    </View>
                    <Text style={styles.TextOutName} >
                        {name}
                    </Text>
                    <Text style={styles.TextAge}>Age Output is below:</Text>
                    <Text style={styles.TextOutAge} >
                        {age}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    Name: {
        backgroundColor: 'white',
        fontSize: 15,
        marginLeft: '2%',
        marginTop: 80,
        height: 50,
        padding: 4,
        paddingLeft: 10,
        borderRadius: 20,
        width: '95%'
    },
    Age: {
        backgroundColor: 'white',
        fontSize: 15,
        marginLeft: '2%',
        paddingLeft: 10,
        marginTop: 15,
        height: 50,
        padding: 4,
        borderRadius: 20,
        width: '95%'

    },
    TextName: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: "italic",
        marginBottom: 10,

    },
    TextAge: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: "italic",
        marginBottom: 10,

    },
    TextOutAge: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        color: 'red',
        fontSize: 15,
        marginBottom: 45,
    },
    TextOutName: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'red',
        fontSize: 15,
    },
    ReduxText: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ReduxText1: {
        fontSize: 45,
    },
    ReduxText2: {
        fontSize: 16,
        color: '#3a86ff',
    },
    OutContainer: {
        marginTop: 100,
        borderWidth: 1,
        borderRadius:5,
        width: "95%",
        marginLeft: 10
    },
    QuoteContainer: {
        margin: 10,
    },
    QuoteText: {
        borderWidth: 1,
        borderRadius:5,
        padding:1,
        marginTop:3,
        fontSize: 15,
    }

})