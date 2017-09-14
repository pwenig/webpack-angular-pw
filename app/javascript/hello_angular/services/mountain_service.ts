import {Component} from '@angular/core';
import {Http} from '@angular/http';


export class MountainService {

  results: string[];

  constructor(private http: Http){}

  getMountains() {
    this.http.get('/mountains').subscribe(data => {

      this.results = data['results'];
      console.log('SERVICE', this.results);
    
    });

    

  }
}