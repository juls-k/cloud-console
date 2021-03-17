import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';

@Component({
    templateUrl: './object-browser.component.html'
})
export class ObjectBrowserComponent implements OnInit {
    constructor(
        private contentService: ContentService
    ) {
    }

    ngOnInit() {
        this.contentService.setHeadText('Object Browser')
    }
}
