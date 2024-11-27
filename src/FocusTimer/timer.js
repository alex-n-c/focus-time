import state from "./state.js";
import * as el from "./elements.js";
import { stop } from "./actions.js";

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2,'0');
    el.seconds.textContent = String(seconds).padStart(2, '0');

    if(minutes <= 0){
        el.minus.classList.add('button-control-disabled');
    }else{
        el.minus.classList.remove('button-control-disabled');
    }
}

export function addMinutes(minutes){
    let elSeconds = Number(el.seconds.textContent);
    let elMinutes = Number(el.minutes.textContent);      
    
    elMinutes = elMinutes + minutes;

    if(elMinutes < 0){
        elMinutes = 0;
    }  
    
    updateDisplay(elMinutes, elSeconds)
}

export function countDown(){
    clearTimeout(state.countDownId);
    
    if(!state.isRunning){
        return;
    }
        
    let seconds = Number(el.seconds.textContent);
    let minutes = Number(el.minutes.textContent);

    seconds--;

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0){
        stop();
        return;
    }

    updateDisplay(minutes, seconds);
    
    state.countDownId = setTimeout(() => { countDown(); }, 1000 /*milisegundos*/ );
}