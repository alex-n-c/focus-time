import state from "./state.js";
import * as el from './elements.js';
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function playSound(sound){
    let button;   

    if(state.sound != ''){
        button = el.controlsSounds.querySelector(`[data-action=${state.sound}]`);
        button.classList.remove('sound-active');
        button.classList.remove('heartbeat');
        sounds[state.sound].pause();
        if(state.sound == sound){
            state.sound = '';
            return;
        }
    }
    state.sound = sound;
    button = el.controlsSounds.querySelector(`[data-action=${state.sound}]`);
    button.classList.toggle('sound-active');
    button.classList.toggle('heartbeat');

    sounds[sound].play();
    sounds[sound].loop = true;
}

export function play(){
    state.isRunning = document.documentElement.classList.toggle('running');   
    timer.countDown();
}

export function pause(){
    state.isRunning = document.documentElement.classList.toggle('running');
}

export function stop(){
    state.isRunning = document.documentElement.classList.remove('running');    
    state.minutes = 25;
    state.seconds = 0;
    timer.updateDisplay();
    
}

export function plus(){
    timer.addMinutes(5);
}

export function minus(){
    timer.addMinutes(-5);
}