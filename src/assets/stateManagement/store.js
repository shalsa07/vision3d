import { proxy } from "valtio";

const state=proxy({
    arMode:false,
    fllScrn:false,

    uiSettingsMenu:true,
    uiLevels:false,
    uiColors:false,
    uiRooms:false,
    ui360Mode:false,

    toggle1stFlr:true,
    toggleRoofFlr:true,

    roomCord:[-14,-2,6],
    roomRotation:0,
    camPos:[20,20,30],
    camTarget:[0,0,0],

    camPosition:[-20,20,30],

    minDist:30,
    maxDist:60,

    arBtnOffset:'20px'
})

export {state}