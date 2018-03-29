import { Component, OnInit } from '@angular/core';

import {FollowersService } from '../services/followers.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
