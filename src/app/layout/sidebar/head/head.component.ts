import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar-head',
    templateUrl: './head.component.html'
})
export class SidebarHeadComponent {

    constructor(
        private router: Router
    ) {

    }

    routeURL(url: string) {
        this.router.navigateByUrl(url);
    }

    getUrl() {
        return this.router.url.includes('compute');
    }
}
