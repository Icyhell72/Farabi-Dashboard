import { Component, OnInit } from '@angular/core';
import { NftHeaderComponent } from '../../dashboard/components/nft/nft-header/nft-header.component';
import { NftAuctionsTableComponent } from '../../dashboard/components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../dashboard/components/nft/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from '../../dashboard/components/nft/nft-dual-card/nft-dual-card.component';
import { NftSingleCardComponent } from '../../dashboard/components/nft/nft-single-card/nft-single-card.component';


@Component({
  selector: 'app-update-admin',
  standalone: true,
  imports: [
    NftHeaderComponent,
    NftDualCardComponent,
    NftSingleCardComponent,
    NftChartCardComponent,
    NftAuctionsTableComponent,
],
  templateUrl: './update-admin.component.html',
  styleUrl: './update-admin.component.scss'
})
export class UpdateAdminComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}
}
