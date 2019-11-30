import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from '../constants/url';

@Injectable({
  providedIn: 'root'
})
export class SpicinemasService {

  constructor(private http: HttpClient) {
  }

  getAllComingSoonMovies() {
    return this.http.get(Url.BASE_URL + Url.GET_ALL_COMING_SOON_MOVIES);
  }

  checkStatus(movie: string) {
    const url = (Url.BASE_URL + Url.CHECK_STATUS).replace('{PARAM}', movie);
    return this.http.get<boolean>(url);
  }
}
