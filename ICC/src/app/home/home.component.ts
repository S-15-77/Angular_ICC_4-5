import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ICC';
  

  venue1=[
    {
      p1: "Edgbaston",
      p2: "Bristol Country Ground",
      p3: "Sophia Gardens",
      p4: "Riverside Ground",
      p5: "headingley",
      p6: "Lord's",
      p7: "The Oval"
    },
    {
      p1: "Birmingham",
      p2: "Bristol",
      p3: "Cardiff",
      p4: "Chester-le-street",
      p5: "Leeds",
      p6: "London",
      p7: "London"
    },
    {
      p1: 25000,
      p2: 17500,
      p3: 15643,
      p4: 17000,
      p5: 18350,
      p6: 30000,
      p7: 25500
    },
    {
      p1: "Matches: 5",
      p2: "Matches: 3",
      p3: "Matches: 4",
      p4: "Matches: 3",
      p5: "Matches: 4",
      p6: "Matches: 5",
      p7: "Matches: 5"
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
