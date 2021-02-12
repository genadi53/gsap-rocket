import gsap from "gsap/all";
import config  from '../../config';
import { MotionPathPlugin } from 'gsap/all';

export default class Animation{
    constructor(){
        this._rocketElement = document.querySelector(".rocket");
        this._backgroundElement = document.querySelector(".background"); 
        this._svgPath = config.svgPath;

        this._rocketTween = null;
    }

    start(){

        gsap.registerPlugin(MotionPathPlugin);
        this.startTween();

        this._backgroundElement.addEventListener('click', () => {
           
            if(this._rocketTween !== null){

                this._rocketTween.kill();
                this._rocketTween = null;

            } else if(this._rocketTween === null){
                this.startTween();
            }
        });

        
    }

    startTween(){
        this._rocketTween = gsap.to(this._rocketElement, 
            { duration: 5, ease: "none", motionPath: {path: this._svgPath, autoRotate: true}}).repeat(-1);
    }
}