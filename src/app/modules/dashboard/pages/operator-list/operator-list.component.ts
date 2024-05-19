import { Component, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';

@Component({
  selector: 'app-operator-list',
  standalone: true,
  imports: [
      NftHeaderComponent,
      NftDualCardComponent,
      NftSingleCardComponent,
      NftChartCardComponent,
      NftAuctionsTableComponent,
  ],
  templateUrl: './operator-list.component.html',
  styleUrl: './operator-list.component.scss'
})
export class OperatorListComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit(): void {}

}
