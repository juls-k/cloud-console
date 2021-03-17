import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';

@Component({
    templateUrl: './clusters.component.html'
})
export class ClustersComponent implements OnInit {
    constructor(
        private contentService: ContentService
    ) {
    }

    ngOnInit() {
        this.contentService.setHeadText('Clusters')
    }
}
