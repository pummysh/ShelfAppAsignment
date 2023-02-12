import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation';
import {store} from './src/redux/Store';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaView style={styles.mainContainer}>
          <RootNavigator />
        </SafeAreaView>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#FAFAFA'},
  container: {
    flex: 1,
  },
});

export default App;
