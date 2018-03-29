import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DataService } from './data.service';

@Injectable()
export class FollowersService extends DataService {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/wdenaro/followers', http);
  }
}
