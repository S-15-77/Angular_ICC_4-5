import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  sch =[
    {
      date:'14-07-21',
      matno:1,
      t1:'India',
      t2:'Sri Lanka',
      res:'India won by 10 wickets',
      venue:'Chennai'
    },
    {
      date:'15-07-21',
      matno:2,
      t1:'Australia',
      t2:'England',
      res:'Australia won by 5 wickets',
      venue:'Mumbai'
    },
    {
      date:'16-07-21',
      matno:3,
      t1:'Pakistan',
      t2:'New Zealand',
      res:'New Zealand won by 97 Runs',
      venue:'Chennai'
    },
    {
      date:'17-07-21',
      matno:4,
      t1:'India',
      t2:'England',
      res:'India won by 5 Runs',
      venue:'Delhi'
    },
    {
      date:'18-07-21',
      matno:5,
      t1:'Sri Lanka',
      t2:'New Zealand',
      res:'New Zealand won by 10 Runs',
      venue:'Mumbai'
    },
    {
      date:'19-07-21',
      matno:6,
      t1:'India',
      t2:'Australia',
      res:'India won by 74 Runs',
      venue:'Chennai'
    },
    {
      date:'20-07-21',
      matno:7,
      t1:'Pakistan',
      t2:'England',
      res:'Pakistan won by 4 Wickets',
      venue:'Delhi'
    },
    {
      date:'21-07-21',
      matno:8,
      t1:'India',
      t2:'New Zealand',
      res:'Match abondanded due to rain',
      venue:'Bangalore'
    },
    {
      date:'22-07-21',
      matno:9,
      t1:'England',
      t2:'South Africa',
      res:'South Africa won by 10 Runs',
      venue:'Mumbai'
    },
    {
      date:'23-07-21',
      matno:10,
      t1:'India',
      t2:'West Indies',
      res:'West Indies won by 65 Runs',
      venue:'Chennai'
    },
    {
      date:'24-07-21',
      matno:12,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:13,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:14,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:15,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:16,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:17,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:18,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:19,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
    {
      date:'24-07-21',
      matno:20,
      t1:'New Zealand',
      t2:'Pakistan',
      res:'Pakistan won by 40 Runs',
      venue:'Mumbai'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
