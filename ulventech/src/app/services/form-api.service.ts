import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormInterface} from '../interfaces/form';

const apiEndPoint = `https://ulventech-react-exam.netlify.app/api/form`;

@Injectable({
  providedIn: 'root',
})
export class FormApiService {
  private headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  async get(): Promise<any> {
    return await this.http.get(apiEndPoint).toPromise();
  }

  async post(form: FormInterface): Promise<any> {
    return this.http.post(apiEndPoint, form, {headers: this.headers}).toPromise();
  }
}
