import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State,usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { playbackService } from '../../MusicPlayService';

const ControlCenter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerState = usePlaybackState();



    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };
  



    const togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();

        if (currentTrack !== null) {
          if(await TrackPlayer.getState() == State.Playing) {
            TrackPlayer.pause();
            setIsPlaying(false)
          }
          else {
            TrackPlayer.play();
            setIsPlaying(true)


          }
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={()=>togglePlayback()}>
                <Icon 
                    style={styles.icon} 
                    name={isPlaying? "pause" : "play-arrow"} 
                    size={75} 
                />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});

export default ControlCenter;
