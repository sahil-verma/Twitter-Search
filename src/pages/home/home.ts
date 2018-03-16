import { Component } from '@angular/core';
import { TwitterSearchService } from '../../app/twitter-search.service';

@Component({
  selector: 'page-home',
  providers: [TwitterSearchService],
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {

  // set results list
  searchResults: any;

  constructor(private twitterSearchService: TwitterSearchService) {

  }

  // Event handler for search box
  onKeyRelease(event: KeyboardEvent) {
    
    console.log("key pressed: " + (<HTMLInputElement>event.target).value + "\n");

    console.log(this.twitterSearchService);

    this.searchResults = this.twitterSearchService.searchUsers((<HTMLInputElement>event.target).value);

  }

}
