import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= dasherize(selector) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.<%= dasherize(style) %>']
})
export class <%= classify(name) %>Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
