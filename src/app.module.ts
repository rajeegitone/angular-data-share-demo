import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [ParentComponent, ChildComponent],
  bootstrap: [ParentComponent],
})
export class AppModule {}
