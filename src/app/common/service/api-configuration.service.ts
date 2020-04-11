import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigurationService {
  url:string='https://28a15dca-e1ab-4a7b-9f03-6c36d5aff613.mock.pstmn.io/';
  constructor() { }
  getUrl():string{
    return this.url
  }
}
