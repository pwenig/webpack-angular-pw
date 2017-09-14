import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MountainService {

  results: any = [];

  constructor(private http: HttpClient){}

  getMountains() {
    this.http.get('/mountains').subscribe(data => {

      this.results = data;
      console.log('SERVICE', data);
    
    });

    

  }
}