import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';

@Component({
    templateUrl: './zones.component.html'
})
export class ZonesComponent implements OnInit {
    constructor(
        private contentService: ContentService
    ) {
    }

    ngOnInit() {
        this.contentService.setHeadText('Zones')
    }
}
