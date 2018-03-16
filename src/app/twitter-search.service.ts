import { Injectable } from '@angular/core';
// import {Http, Headers} from '@angular/http';
// import { crypto } from 'crypto';
// import * as Twitter from 'twitter';
// import 'rxjs/add/operator/map';

@Injectable()
export class TwitterSearchService {

  /* set the client info - for app authentication

  private client = new Twitter({
      consumer_key: 'DNFEMaZupgwcEC9fSygSHaRqX',
      consumer_secret: 'JV7THeyYZQL8keervqYjSyEfXJmV9vn7NxLGjlZo54734QgKd1',
      access_token_key: '3428088196-4irQNQxlvJ2zYYVxw9nY6zyXNMCKHxCqO3Gj94L',
      access_token_secret: 'APBdJKjJ3jhI0mslZcyTpkYJgVUoinpDp9I9dsZYBuWfv'
  }); 
  
  */

  constructor() { 
    console.log("\nTwitter Search Service initiated\n");
   }

  

  searchUsers(query: string): Array<object> {

    return [{
      username: "Rahul Prajapat",
      profile_desc:""
    },{
      username: "",
      profile_desc:"Mohit Goswami"
    },{
      username: "Rohini Sharda",
      profile_desc:""
    },{
      username: "Raghu Yadav",
      profile_desc:""
    },{
      username: "Amrita Saha",
      profile_desc:""
    },{
      username: "Abhishek Gupta",
      profile_desc:""
    },{
      username: "Charandeep Singh",
      profile_desc:""
    },{
      username: "Jeffery Willson",
      profile_desc:""
    },{
      username: "Smith Klein",
      profile_desc:""
    },{
      username: "Samuel Koch",
      profile_desc:""
    }];

    /* request data from Twitter API

    return this.client.get('users/search', {q: query, page: 1, count: 10}, function(error, searchResults, response) {
      if (!error) {
        console.log("--- Search results ---\n");
        console.log(searchResults);
        console.log("--- raw response ---\n");
        console.log(response);
      } else {
        console.log(error);
      }

      return searchResults;
    });

    */

    

  }

}