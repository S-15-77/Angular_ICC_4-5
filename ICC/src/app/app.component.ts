import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICC';
  mostrun=[
    {
      rank : 1,
      name: "Sachin Tendulkar",
      team: "India",
      runs: 2278
    },
    {
      rank : 2,
      name: "Ricky Ponting",
      team: "Australia",
      runs: 1743
    },
    {
      rank : 3,
      name: "Kumar Sangakkara",
      team: "Sri Lanka",
      runs: 1532
    },
    {
      rank : 4,
      name: "Brian Lara",
      team: "West Indies",
      runs: 1225
    },
    {
      rank : 5,
      name: "AB de Villiers",
      team: "South Africa",
      runs: 1207
    }
  ];
  mostwicket=[
    {
      rank : 1,
      name: "McGrath",
      team: "Australia",
      wicket: 71
    },
    {
      rank : 2,
      name: "M Murailitharen",
      team: "Sri Lanka",
      wicket: 68
    },
    {
      rank : 3,
      name: "SL Malinga",
      team: "Sri Lanka",
      wicket: 56
    },
    {
      rank : 4,
      name: "Wasim Akram",
      team: "Pakistan",
      wicket: 55
    },
    {
      rank : 5,
      name: "MA Starc",
      team: "Australia",
      wicket: 49
    }
  ];
}
