import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class DataService {
    constructor(private url: string, private http: HttpClient) {}

    getAll() {
        return this.http.get(this.url)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error));
        } else if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        } else {
            return Observable.throw(new AppError(error));
        }
    }
}
