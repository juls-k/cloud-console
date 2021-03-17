import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';
import { DemoData } from '../../../model/content.data';

@Component({
    templateUrl: './vminstances.component.html'
})
export class VMInstancesComponent implements OnInit {

    dataList: DemoData[] | undefined;
    
    constructor(
        private contentService: ContentService
    ) {
    }

    ngOnInit() {
        this.contentService.setHeadText('VM instances');

        this.dataInit();
    }
    
    dataInit() {
        this.contentService.getDemoData().subscribe((resp: DemoData[]) => {
            this.dataList = resp;
            console.log(this.dataList);
        });
    }
}
