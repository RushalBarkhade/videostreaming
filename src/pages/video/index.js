import React, {useEffect} from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';

const VideoStreaming = () => {
  useEffect(() => {
    Orientation.unlockAllOrientations();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{uri: 'https://www.youtube.com/watch?v=pSYKVJ6mNZg'}}
        style={{width: 800, height: 800}}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
    </SafeAreaView>
  );
};

export {VideoStreaming};
