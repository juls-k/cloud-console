import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DemoData } from "./model/content.data";

@Injectable()
export class ContentService {
    private contentHead: string = '';

    private demoDataUrl: string = 'https://jsonplaceholder.typicode.com/comments';

    constructor(
        private http: HttpClient
    ) {

    }

    setHeadText(val: string) {
        this.contentHead = val;
    }

    getHeadText() {
        return this.contentHead;
    }

    getDemoData() {
        return this.http.get<DemoData[]>(this.demoDataUrl);
    }
}