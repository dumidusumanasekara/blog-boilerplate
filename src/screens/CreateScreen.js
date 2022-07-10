import React, { useContext, useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { Context } from '../context/BlogContext';

const CreateScreen = ( { navigation }) => {

    const { addBlogPost } = useContext(Context);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <View style={style.container}>
                <Text style={style.label}>Enter title:</Text>
                <TextInput 
                    value={title} 
                    onChange={text => setTitle(text)} 
                    style={style.input}
                />
                <Text style={style.label}>Enter content:</Text>
                <TextInput 
                    value={content} 
                    onChange={text => setContent(text)}
                    style={style.input}
                />
            </View>
            <Button 
                title="Add Blog Post" 
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
        height: '20%'
    },
    label: {
        fontSize: 20,
        borderColor: 'black',
        marginTop: 10,
        marginHorizontal: 10,
    }
})

export default CreateScreen;

