import { Component, OnInit, HostListener, HostBinding, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.scss']
})
export class SelectCardComponent implements OnInit, OnChanges {
  @Input() data;
  @Input() forceSelect;

  @Output () selectedEmitter = new EventEmitter();
  @HostBinding('class.selected')
  selected: boolean;
  item: any;

  constructor() { }

  ngOnInit() {
    if (this.forceSelect) {
      this.selected = true;
    }
  }

  @HostListener('click')
  select() {
    this.selected = !this.selected;
    if(this.selected) {
    this.selectedEmitter.emit({data:this.item, add: true})
    }
    if(!this.selected) {
      this.selectedEmitter.emit({data: this.item, add: false})
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.data) {
      console.log(this.data)
      this.item = this.data
    }
  }
}
