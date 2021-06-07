import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-cur',
  templateUrl: './stats-cur.component.html',
  styleUrls: ['./stats-cur.component.css']
})
export class StatsCurComponent implements OnInit {
  mostrun=[
    {
      rank : 1,
      name: "Rohit Sharma",
      team: "India",
      runs: 648
    },
    {
      rank : 2,
      name: "David Warner",
      team: "Australia",
      runs: 647
    },
    {
      rank : 3,
      name: "Shakib Al Hasan",
      team: "bangladesh",
      runs: 606
    },
    {
      rank : 4,
      name: "Kane Williamson",
      team: "New Zealand",
      runs: 578
    },
    {
      rank : 5,
      name: "Joe Root",
      team: "England",
      runs: 556
    }
  ];
  mostwicket=[
    {
      rank : 1,
      name: "MA Starc",
      team: "Australia",
      wicket: 27
    },
    {
      rank : 2,
      name: "Lockie Ferguson",
      team: "New Zealand",
      wicket: 21
    },
    {
      rank : 3,
      name: "Jofra Archer",
      team: "England",
      wicket: 20
    },
    {
      rank : 4,
      name: "Mustafizur Rahman",
      team: "Bangladesh",
      wicket: 20
    },
    {
      rank : 5,
      name: "Jasprit Bumrah",
      team: "India",
      wicket: 18
    }
  ];
  Highscore=[
    {
      rank : 1,
      name: "David Warner",
      team: "Australia",
      runs: 166
    },
    {
      rank : 2,
      name: "Jason Ray",
      team: "England",
      runs: 153
    },
    {
      rank : 3,
      name: "Aaron Finch",
      team: "Australia",
      runs: 153
    },
    {
      rank : 4,
      name: "Eoin Morgan",
      team: "England",
      runs: 148
    },
    {
      rank : 5,
      name: "Kane Williamson",
      team: "New Zealand",
      runs: 148
    }
  ];
  bestbowling=[
    {
      rank : 1,
      name: "Shaheen Afridi",
      team: "Pakistan",
      fig: "6/35"
    },
    {
      rank : 2,
      name: "Mitchell Starc",
      team: "Australia",
      fig: "5/26"
    },
    {
      rank : 3,
      name: "Shakib Al Hasan",
      team: "Bangladesh",
      fig: "5/29"
    },
    {
      rank : 4,
      name: "Mohammad Amir",
      team: "Pakistan",
      fig: "5/30"
    },
    {
      rank : 5,
      name: "Jimmy Neesham",
      team: "New Zealand",
      fig: "5/31"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
