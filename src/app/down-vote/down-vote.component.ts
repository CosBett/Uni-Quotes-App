import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-vote',
  templateUrl: './down-vote.component.html',
  styleUrls: ['./down-vote.component.css']
})
export class DownVoteComponent implements OnInit {

  totalNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  totalDownvote() {
    this.totalNumber++
  }
}
