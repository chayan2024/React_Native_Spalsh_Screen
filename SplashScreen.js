import React, { useEffect } from 'react';
import { View,StyleSheet ,Image} from 'react-native';

const SplashScreen = ({ navigation }) => {

    const delayTime = 4000;

    const fetchData = async () => {

        setTimeout(() => {
            navigation.replace('Home');
          }, delayTime);
    };

  useEffect(() => {
    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images.png')} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    image: {
      width: '60%', 
      height: '30%',
      resizeMode: 'cover', 
      backgroundColor: 'transparent',
      borderRadius:20
    },
  });

export default SplashScreen;
