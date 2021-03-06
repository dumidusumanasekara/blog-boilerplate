import React, { useContext } from "react";
import { View, Text, FlatList, Button, TouchableOpacity ,StyleSheet} from "react-native";
// if you have to refer to more Context files, u can use below export like as BlogContext or as what ever to avoid import confussions
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'

const IndexScreen = ( { navigation } ) => {

    // after refactoring we are sending state variable, not data
    const { state, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            <FlatList 
                data={ state }
                keyExtractor = { (blogPost) => blogPost.title }
                renderItem = { ({item}) =>
                {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id:item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )

}


IndexScreen.navigationOptions = ( { navigation } ) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
    
})

export default IndexScreen;