import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this.httpClient.get(url, { params });
  }
}
