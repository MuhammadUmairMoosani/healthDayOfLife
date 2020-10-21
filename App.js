import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    title: 'Green DETOX',
    description: [
      'Prevents Cancer',
      'Healthy bones',
      'Immune system',
      'Supports eyesight',
      'Improves digestion',
    ],
    id: 1,
  },
  {
    title: 'Yellow BEAUTY',
    description: [
      'Healthy heart',
      'Lowers cholesterol',
      'Healthy joints',
      'Supports eyesight',
      'Healthy skin',
    ],
    id: 2,
  },
  {
    title: 'Purple LONGEVITY',
    description: [
      'Healthy heart',
      'Healthy blood vessels',
      'Helps memory',
      'Anti-aging',
      'Healthy urinary system',
    ],
    id: 3,
  },
  {
    title: 'Orange CANCER PREVENTION',
    description: [
      'Healthy heart',
      'Immune system',
      'Skin protection',
      'Healthy skin',
      'Antioxidant',
    ],
    id: 4,
  },
  {
    title: 'White IMMUNE SUPPORT',
    description: [
      'Immune system',
      'Healthy colon',
      'Healthy heart',
      'Prevents ulcers',
      'Lowers cholesterol',
    ],
    id: 5,
  },
  {
    title: 'Red HEART HEALTH',
    description: [
      'Healthy heart',
      'Decr. blood pressure',
      'Prevents Cancer',
      'Skin protection',
      'Helps cell renewal',
    ],
    id: 6,
  },
];
const darkColors = [
  '#229954',
  '#D4AC0D',
  '#7D3C98',
  '#BA4A00',
  '#D0D3D4',
  '#A93226',
];
const lightColors = [
  '#A9DFBF',
  '#F9E79F',
  '#D2B4DE',
  '#EDBB99',
  '#F7F9F9',
  '#E6B0AA',
];

const renderItem = ({item}) => (
  <View>
    <Text
      style={{
        backgroundColor: darkColors[item.id - 1],
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: '#ffffff',
      }}>
      {item.title}
    </Text>
    {item.description.map((data, index) => (
      <View style={{backgroundColor: lightColors[item.id - 1]}}>
        <Text
          style={{
            fontFamily: 'Cochin',
            fontSize: 18,
            paddingVertical: 15,
            marginLeft: 10,
          }}>
          {data}
        </Text>
      </View>
    ))}
  </View>
);
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
