import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';

@Component({
    templateUrl: './health-check.component.html'
})
export class HealthCheckComponent implements OnInit {
    constructor(
        private contentService: ContentService
    ) {
    }

    ngOnInit() {
        this.contentService.setHeadText('Health checks')
    }
}
