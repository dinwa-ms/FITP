import React from 'react';
import { Alert, AppRegistry, Button, Text, View, WebView, Platform, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Constants } from 'expo';

class VocabsScreen extends React.Component {

  _onPressText(word) {
    Alert.alert(word)
  }

  static navigationOptions = {
    title: 'Vocabs',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.props.title}
          onPress={()=>this._onPressText(this.props.en)}
        />
      </View>
    )
    
  }
}


export default class LotsOfButtons extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <VocabsScreen style={{width: 50, height: 50}} title='un oiseau' en='a bird'/>
        <VocabsScreen title='un escargot' en='a snail'/>
        <VocabsScreen title='un canard' en='a duck'/>
        <VocabsScreen title='un poisson' en='a fish'/>
        <VocabsScreen title='un elephant' en='an elephant'/>
        <VocabsScreen title='un guépard' en='a cheetah'/>
        <VocabsScreen title='un insecte' en='an insect'/>
        <VocabsScreen title='un koala' en='a koala'/>
        <VocabsScreen title='un lezard' en='a lizard'/>
        <VocabsScreen title='une grenoville' en='a frog'/>
        <VocabsScreen title='une étoile de mer' en='a starfish'/>
        <VocabsScreen title='un serpent' en='a snake'/>
        <VocabsScreen title='un papillon' en='a butterfly'/>
        <VocabsScreen title='un araignée' en='a spider'/>

      </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d6d7da',
    backgroundColor: '#d6d7da',
  }
});
