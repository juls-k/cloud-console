import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';

@Component({
    templateUrl: './metadata.component.html'
})
export class MetadataComponent implements OnInit {
    constructor(
        private contentService: ContentService
    ) {
    }

    ngOnInit() {
        this.contentService.setHeadText('Metadata')
    }
}
