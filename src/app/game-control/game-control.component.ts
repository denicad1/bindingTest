import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  time:number=1;
  @Output("start") startGame=new EventEmitter<{time:number}>();
  timeClock;
  constructor() { }

  ngOnInit(): void {
  }
  
  onStart(){
   
    this.timeClock=setInterval(()=>{
      this.startGame.emit({
        time:this.time++
        
      })
      
    },1000);
    
  }
  onStop(){
    if(this.timeClock){
      this.time=0;
      clearInterval(this.timeClock);
    }
  }

}
