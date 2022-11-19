import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import styles from './src/theme/appTheme';

const App = () => {
  return (
    // SafeAreaView is a component that helps to avoid the notch in the iPhone
    <SafeAreaView style={styles.background}>
       {/* Status bar is the bar at the top of the phone */}
      <StatusBar 
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
