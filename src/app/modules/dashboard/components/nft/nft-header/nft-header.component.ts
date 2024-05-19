import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nft-header',
    templateUrl: './nft-header.component.html',
    standalone: true,
})
export class NftHeaderComponent implements OnInit {
  constructor(private _route: Router ) {}

  ngOnInit(): void {}

  navigatetooperators() {
    this._route.navigate(['dashboard/operators']);
  }

  navigatetoclients() {
    this._route.navigate(['dashboard/welcome']);
  }

}
