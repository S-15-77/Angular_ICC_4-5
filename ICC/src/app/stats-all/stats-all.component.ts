import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-all',
  templateUrl: './stats-all.component.html',
  styleUrls: ['./stats-all.component.css']
})
export class StatsAllComponent implements OnInit {
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
  Highscore=[
    {
      rank : 1,
      name: "Martin Guptill",
      team: "New Zealand",
      runs: 237
    },
    {
      rank : 2,
      name: "Chris Gayle",
      team: "West Indies",
      runs: 215
    },
    {
      rank : 3,
      name: "Gary Kirsten",
      team: "South Africa",
      runs: 188
    },
    {
      rank : 4,
      name: "Sourav Ganguly",
      team: "India",
      runs: 183
    },
    {
      rank : 5,
      name: "Viv Richards",
      team: "West Indies",
      runs: 181
    }
  ];
  bestbowling=[
    {
      rank : 1,
      name: "McGrath",
      team: "Australia",
      fig: "7/15"
    },
    {
      rank : 2,
      name: "Andy Bichel",
      team: "australia",
      fig: "7/20"
    },
    {
      rank : 3,
      name: "Tim Southee",
      team: "New Zealand",
      fig: "7/33"
    },
    {
      rank : 4,
      name: "Winston Davis",
      team: "West Indies",
      fig: "7/51"
    },
    {
      rank : 5,
      name: "Gary Gilmour",
      team: "Australia",
      fig: "6/14"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
