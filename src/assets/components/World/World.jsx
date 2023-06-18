import React from 'react'
import './World.scss'
import Experience from './Experience'
import Wolrd360 from './Wolrd360'
import UiWorldMenu from '../worldUi/UiWorldMenu/UiWorldMenu'

//closeBtn
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

//arButton
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

//level
import RoofingIcon from '@mui/icons-material/Roofing';
import Filter1Icon from '@mui/icons-material/Filter1';

//right menu
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import VrpanoOutlinedIcon from '@mui/icons-material/VrpanoOutlined';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

//bottom menu
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import { FullscreenOutlined } from '@mui/icons-material'
import UiRoomMenu from '../worldUi/uiRoomMenu/UiRoomMenu'
import UiCLoseBtn from '../worldUi/uiCloseBtn/UiCLoseBtn'
import ArBtn from '../worldUi/uiArBtn/ArBtn'
import FullScreenBtn from '../worldUi/uiFullScrn/FullScreenBtn'
import UiLevelToggle from '../worldUi/uiLevelsToggle/UiLevelToggle'
import Ar from './Ar'
import { useSnapshot } from 'valtio'
import { state } from '../../stateManagement/store'


const logging=()=>{
  // console.log('left-arrow')
}

const World = () => {
  // const {progress}=useProgress()
  // const {fullScrnState,setFullScrnState,setLevelRoofState,setLevel1stState,setCamTarget}=useContext(AppContext)
  // const [state,dispatch]=useReducer(postReducer,INITIAL_VALUES)
  const snap=useSnapshot(state)
  // console.log(snap);

  const uiArrows={
    left:{icon:<ArrowBackOutlinedIcon className='icons'/>,clickFunction:()=>console.log('')},
    right:{icon:<ArrowForwardOutlinedIcon className='icons'/>,clickFunction:()=>console.log('')}
  }
  
  const uiRightMenu=[
    {icon:<CheckBoxOutlinedIcon className='icons'/>,title:'levels',clickFunction:()=>{
      state.uiLevels=true
      state.uiSettingsMenu=false
      // console.log('levels')
    }},
    {icon:<ColorLensOutlinedIcon className='icons'/>,title:'color',clickFunction:()=>{
      state.uiColors=true
      state.uiSettingsMenu=false
      // console.log('rooms')
    }},
    {icon:<VrpanoOutlinedIcon className='icons'/>,title:'rooms',clickFunction:()=>{
      state.uiRooms=true
      state.uiSettingsMenu=false
      // console.log('rooms')
    }},
    {icon:<ThreeDRotationIcon className='icons'/>,title:'360s',clickFunction:()=>{
      state.ui360Mode=true
      state.uiSettingsMenu=false
      // console.log('360')
    }}
  ]
  
  const uiLevelsMenu=[
    {icon:<RoofingIcon className='icons'/>,title:'rooFlr',clickFunction:()=>{
      state.toggle1stFlr=false
      // console.log('1st')
    }},
    {icon:<Filter1Icon className='icons'/>,title:'1stFlr',clickFunction:()=>{
      state.toggleRoofFlr=false
      // console.log('roof')
    }},
  ]
  
  const uiColorMenu={
    ext:[
      {icon:<EmojiTransportationOutlinedIcon className='icons'/>,title:'driveway',clickFunction:()=>{
        console.log('driveway')
      }},
    ]
  }
  
  const uiRoomsMenu={
    ext:[
      {icon:<EmojiTransportationOutlinedIcon className='icons'/>,title:'driveway',clickFunction:()=>{
        state.minDist=0
        state.maxDist=1
        state.roomCord=[-15,-1.6,-13]
        state.roomRotation=0
        state.camTarget=[-15,-1.6,-12]
        state.camPosition=[0,0,0]
        console.log('driveway')
      }},
      {icon:<PoolOutlinedIcon className='icons'/>,title:'pool',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[2,0,-22]
        state.roomRotation=180
        // state.camTarget=[0,0,0]
        state.camPosition=[0,0,0]
        console.log('pool')
      }},
    ],

    int:[
      {icon:<MeetingRoomIcon className='icons'/>,title:'foyer',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[-15.5,-1.6,-2.5]
        state.roomRotation=0
        // state.camTarget=[-15.5,-1.6,-1]
        state.camPosition=[0,0,0]
        console.log('foyer')
      }},
      {icon:<StairsOutlinedIcon className='icons'/>,title:'stair',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[14,-1.6,-11]
        state.roomRotation=180
        // state.camTarget=[15,-1.6,-10]
        state.camPosition=[0,0,0]
        console.log('pool')
      }},
      {icon:<CountertopsOutlinedIcon className='icons'/>,title:'kitchen',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[-11.5,-1,6.5]
        state.roomRotation=0
        // state.camTarget=[-11.5,-1,7.5]
        state.camPosition=[0,0,0]
        console.log('pool')
      }},
      {icon:<WeekendOutlinedIcon className='icons'/>,title:'lounge',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[15,-.8,-20]
        state.roomRotation=180
        // state.camTarget=[15,-.8,-19]
        state.camPosition=[0,0,0]
        console.log('pool')
      }},
      {icon:<BedOutlinedIcon className='icons'/>,title:'bedroom',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[-9,-4.2,0]
        state.roomRotation=0
        // state.camTarget=[-10,-4.2,1]
        state.camPosition=[0,0,0]
        console.log('pool')
      }},
      {icon:<DeckOutlinedIcon className='icons'/>,title:'balcony',clickFunction:()=>{
        state.minDist=0
        state.maxDist=.1
        state.roomCord=[13,-4.2,-11]
        state.roomRotation=180
        // state.camTarget=[13,-4.2,-10]
        state.camPosition=[0,0,0]
        console.log('pool')
      }}
    ],
  }
  
  const arBtn={icon:<ViewInArOutlinedIcon className='icons'/>,title:'ar',clickFunction:()=>{
    state.arMode=true
    console.log('ar')
  }}
  
  const fullScrnBtn={icon:<FullscreenOutlined className='icons'/>,title:'fullScrn',clickFunction:()=>{
    state.fllScrn=true
    console.log('fullScrn')
  }}
  
  const uiBack={icon:<ArrowBackOutlinedIcon className='icons'/>,title:'back',clickFunction:()=>{

    state.uiSettingsMenu=true
    state.uiLevels=false
    state.uiColors=false
    state.uiRooms=false
    state.ui360Mode=false

    
    state.toggle1stFlr=true,
    state.toggleRoofFlr=true,

    state.roomCord=[-14,-2,6],
    state.roomRotation=0,
    state.camTarget=[0,0,0],

    state.camPosition=[-20,20,30],

    state.minDist=20,
    state.maxDist=60

    // console.log('close')
  },
  doubleclickFunction:()=>{
    state.fllScrn=false
    state.arMode=false
  }}

  return (
    <>
        {snap.uiSettingsMenu && <UiWorldMenu menuList={uiRightMenu}/>}
        {snap.uiLevels && <UiLevelToggle levelsMenuList={uiLevelsMenu}/>}
        {snap.uiRooms && <UiRoomMenu roomMenuList={uiRoomsMenu}/>}
        <UiCLoseBtn closeBtn={uiBack}/>
        <ArBtn arBtnItems={arBtn}/>
        <FullScreenBtn fullScrnItems={fullScrnBtn}/>
        {snap.arMode ? <Ar/> : <Experience/>}
    </>
  )
}

export default World