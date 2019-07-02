import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PCB} from '../domain/pcb';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PcbService {

  private pcbUrl = `${environment.serverUrl}/pcb`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public getAllPCB(): Observable<PCB[]> {
    return this.http.get<PCB[]>(
      this.pcbUrl, {headers: this.header});
  }

}
