import React, {useContext} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

// import BlogProvide -> have to use {} as this is a named import
import { Provider as BlogProvider } from './src/context/BlogContext';



const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen

  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default createAppContainer(navigator);
// wrapping the navigator : lec 129
const App = createAppContainer(navigator);

export default () => {
  // app is the children here
  return (<BlogProvider>
            <App/>
          </BlogProvider>)
};
