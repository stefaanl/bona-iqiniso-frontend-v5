import {Component, Input, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  @Input() sidebar: string = 'enabled';
  ngOnInit() {
    console.log("sidebar: ", this.sidebar);
  }

}
