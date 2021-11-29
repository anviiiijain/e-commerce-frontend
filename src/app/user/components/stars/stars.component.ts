import { DecimalPipe } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() stars:any;
  @Input() isInput: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
}

}
