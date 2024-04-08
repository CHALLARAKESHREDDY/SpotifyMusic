import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player'

import { PlayListData } from './src/constants'

export async function setupPlayer(){
    let isSet=false
    try{
        await TrackPlayer.getCurrentTrack()
        isSet=true
    }catch {
        await  TrackPlayer.setupPlayer()
        isSet=true
    }finally{
        return isSet
    }
}

export async function addTrack(){
    await TrackPlayer.add(PlayListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService(){
    
    TrackPlayer.addEventListener(Event.RemotePause,()=>{TrackPlayer.pause()})
    TrackPlayer.addEventListener(Event.RemotePlay,()=>{TrackPlayer.play()})
    TrackPlayer.addEventListener(Event.RemoteNext,()=>{TrackPlayer.skipToNext()})
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>{TrackPlayer.skipToPrevious()})
    
}