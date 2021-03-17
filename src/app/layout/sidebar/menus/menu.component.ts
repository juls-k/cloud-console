import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './menu.component.html'
})
export class SidebarMenuComponent {
    constructor(
        private router: Router
    ) {

    }

    getUrl() {
        return this.router.url.includes('compute');
    }
}
