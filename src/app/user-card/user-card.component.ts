import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { ConnectionsService } from '../services/connections.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  constructor(
    private feedService: FeedService,
    private connectionService: ConnectionsService
  ) {}
  @Input() firstName: any;
  @Input() photoUrl: any;
  @Input() lastName: any;
  @Input() about: any;
  @Input() age: any;
  @Input() gender: any;
  @Input() showBtn: any;
  @Input() id: any;
  cardButtonClicked(status: string) {
    this.connectionService.sendRequest(status, this.id).subscribe((res) => {
      console.log('res from card button', res);
      this.feedService.updateFeedApi.next(true);
    });

    console.log('status', status, this.id);
  }
}
