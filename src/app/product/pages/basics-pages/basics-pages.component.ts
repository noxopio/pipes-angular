import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {
  public nameLower: string = 'fernando herrera';
  public nameUpper: string = 'FERNANDO HERRERA';
  public fullName: string = 'FeRnAnDo HeRrErA';

}
