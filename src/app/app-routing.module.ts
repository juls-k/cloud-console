import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './main/content/content.component';
import { VMInstancesComponent } from './main/content/pages/vminstances.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent, 
        children: [
            { path: '', redirectTo: 'compute', pathMatch: 'full' },
            { path: 'compute', component: ContentComponent, 
                children: [
                    { path: '', redirectTo: 'instances', pathMatch: 'full'},
                    { path: 'instances', component: VMInstancesComponent}
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
