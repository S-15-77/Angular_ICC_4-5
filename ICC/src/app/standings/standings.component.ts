import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  standing=[
    {
      pos: 1,
      team: "India",
      played: 9,
      won: 7,
      lost: 1,
      nr: 1,
      tied: 0,
      net: +0.809,
      points: 15
    },
    {
      pos: 2,
      team: "Australia",
      played: 9,
      won: 7,
      lost: 2,
      nr: 0,
      tied: 0,
      net: 0.868,
      points: 14
    },
    {
      pos: 3,
      team: "England",
      played: 9,
      won: 6,
      lost: 3,
      nr: 0,
      tied: 0,
      net: +1.152,
      points: 12
    },
    {
      pos: 4,
      team: "New Zealand",
      played: 9,
      won: 5,
      lost: 3,
      nr: 1,
      tied: 0,
      net: +0.175,
      points: 11
    },
    {
      pos: 5,
      team: "Pakistan",
      played: 9,
      won: 5,
      lost: 3,
      nr: 1,
      tied: 0,
      net: -0.430,
      points: 11
    },
    {
      pos: 6,
      team: "Sri Lanka",
      played: 9,
      won: 3,
      lost: 4,
      nr: 2,
      tied: 0,
      net: -0.919,
      points: 8
    },
    {
      pos: 7,
      team: "South Africa",
      played: 9,
      won: 3,
      lost: 5,
      nr: 1,
      tied: 0,
      net: -0.030,
      points: 7
    },
    {
      pos: 8,
      team: "Bangladesh",
      played: 9,
      won: 3,
      lost: 5,
      nr: 1,
      tied: 0,
      net: -0.410,
      points: 7
    },
    {
      pos: 9,
      team: "West Indies",
      played: 9,
      won: 2,
      lost: 6,
      nr: 1,
      tied: 0,
      net: -0.225,
      points: 5
    },
    {
      pos: 10,
      team: "Afghanistan",
      played: 9,
      won: 0,
      lost: 9,
      nr: 0,
      tied: 0,
      net: -1.322,
      points: 0
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
