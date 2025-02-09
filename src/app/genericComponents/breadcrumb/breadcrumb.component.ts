import {Component, OnInit} from '@angular/core';
import {V3BiBreadcrumbBase} from "../../models/V3BiBreadcrumbBase";
import {Router} from "@angular/router";
import {BreadcrumbService} from "../../genericServices/breadcrumb.service";
import {PaginationService} from "../../genericServices/pagination.service";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit{

  breadcrumbs: V3BiBreadcrumbBase[] = [];
  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private paginationService: PaginationService
  ) {}


  onClick(i: number) {
    //console.log("clicked ", i, " nav: ", this.breadcrumbService.getCrumb());
    this.paginationService.setSearch('');
    while (this.breadcrumbService.getCrumb().breadcrumb.length > i+1) {
      this.breadcrumbService.removeLastCrumb();
      //console.log("nav: ", this.breadcrumbService.getCrumb());
    }
    const trail = this.breadcrumbService.getCrumb();
    //console.log("route to follow: ", trail);
    //console.log("route to follow: ", trail.breadcrumb);
    //console.log("route to follow: ", trail.breadcrumb[trail.breadcrumb.length-1]);
    this.router.navigateByUrl(trail.breadcrumb[trail.breadcrumb.length-1].route);
  }
  ngOnInit() {
    this.breadcrumbs = this.breadcrumbService.getCrumb().breadcrumb;
    //console.log("breadcrumb - init : ", this.breadcrumbs);
  }

}
