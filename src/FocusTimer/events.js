import * as el from './elements.js';
import state from './state.js';
import * as actions from './actions.js'

export function registerControls(){
    el.controls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action;

        if(typeof actions[action] != 'function'){
            return;
        }

        // console.log(action);
        actions[action]();     

    })

    el.controlsSounds.addEventListener('click', (event) =>{
        const action = event.target.dataset.action;

        if(typeof action == 'undefined'){
             return;
        }

        actions.playSound(action);
    })    
}

