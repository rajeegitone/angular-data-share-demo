import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  user = 'Rajeev';
  products = ['Television', 'Computer', 'Speaker', 'Mobile'];

  addItem(newItem: string) {
    this.products.push(newItem);
  }
}
