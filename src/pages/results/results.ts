import { Component, Input } from '@angular/core';


@Component({
  selector:'results-list',
  templateUrl: 'results.html'
})

export class ResultsListPage {

  // declare results store
  private results: object;

  constructor() {
  }

  @Input()
  set searchResults(searchResults: object) {
    // set search results
    this.results = searchResults || {};

    // console.log(this.results);
  }
}
