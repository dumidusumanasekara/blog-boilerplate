import React, { useReducer } from 'react'
import createDataContext from './createDataContext';


// here the state is blogPosts
const blogReducer = ( state, action ) => {

    console.log('create screen')
    console.log(state)


    switch(action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
            
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};


// took the function out during the 1st refactor
// dispatch action of type
// const addBlogPost = () => {
//     // dispatch action of type blog post
//     dispatch({ type: 'add_blogpost' })
// };


//modify addBlogPost during the 2nd refactor
const addBlogPost = dispatch => {
    return (title, content) => {
        dispatch({ type: 'add_blogpost', payload: { title:title, content:content} });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        // type and payload are just naming convensions u can use any name
        dispatch({ type: 'delete_blogpost', payload: id})
    };
}


// remove this during 1st refactor of createDataContext

// export const BlogProvider = ({ children }) => {

//     // can rename blogPosts as state but lets keep it this way..
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

//     // dispatch action of type
//     const addBlogPost = () => {
//         // dispatch action of type blog post
//         dispatch({ type: 'add_blogpost' })
//     };

//     return (
//         <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//             {children}
//         </BlogContext.Provider>
//     );
// };

//export default BlogContext;


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    []
);