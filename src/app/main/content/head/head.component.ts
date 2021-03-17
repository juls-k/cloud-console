import { Component } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
    selector: 'content-head',
    templateUrl: './head.component.html'
})
export class ContentHeadComponent {
    constructor(
        private contentService: ContentService
    )   {

    }

    getHeadText() {
        return this.contentService.getHeadText();
    }
}
