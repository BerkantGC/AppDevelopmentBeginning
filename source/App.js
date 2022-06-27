import React from 'react';

import { 
  View, 
  Text,
  TouchableOpacity,
  SafeAreaView, 
  StyleSheet
} from 'react-native';
import Card from './components/Card/Card';
import CardStyle from './components/Card/Card.style';

const App = () => {
  return(
    <SafeAreaView style = {BackStyle.container}>
      <View>
        <Card title = "Hazal abi" description = "Hayırdır?" />
      </View>
    </SafeAreaView>
  );
}

const BackStyle = new StyleSheet.create({
  container: {
    backgroundColor: "mintcream",
    flex: 1,
  }
})

export default App;
