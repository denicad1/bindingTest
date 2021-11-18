import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testBinding';

  oddOrEven=[];

  onTimeList(timeChange: {time:number}){
    
    this.oddOrEven.push(timeChange.time
    )
    console.log();
    }
}



;
