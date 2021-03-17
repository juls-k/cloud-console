import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './main/content/content.component';
import { CommittedUseComponent } from './main/content/pages/compute/committed-use/committed-use.component';
import { DisksComponent } from './main/content/pages/compute/disks/disks.component';
import { HealthCheckComponent } from './main/content/pages/compute/health-check/health-check.component';
import { ImagesComponent } from './main/content/pages/compute/images/images.component';
import { InstanceGroupsComponent } from './main/content/pages/compute/instance-groups/instance-groups.component';
import { InstanceTemplatesComponent } from './main/content/pages/compute/instance-templates/instance-templates.component';
import { MachineImagesComponent } from './main/content/pages/compute/machine-images/machine-images.component';
import { MetadataComponent } from './main/content/pages/compute/metadata/metadata.component';
import { MigrateComponent } from './main/content/pages/compute/migrate/migrate.component';
import { NetworkEndpointComponent } from './main/content/pages/compute/network-endpoint/network-endpoint.component';
import { OperationsComponent } from './main/content/pages/compute/operations/operations.component';
import { SnapshotsComponent } from './main/content/pages/compute/snapshots/snapshots.component';
import { SoleTenantNodesComponent } from './main/content/pages/compute/soletenant-nodes/soletenant-nodes.component';
import { TPUSComponent } from './main/content/pages/compute/tpus/tpus.component';
import { VMInstancesComponent } from './main/content/pages/compute/vminstance/vminstances.component';
import { ZonesComponent } from './main/content/pages/compute/zones/zones.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent, 
        children: [
            { path: '', loadChildren: () => import('./main/content/content.module').then(m => m.ContentModule) }
        ]
    }
    /*
    { path: '', component: MainComponent, 
        children: [
            { path: '', redirectTo: 'compute', pathMatch: 'full' },
            { path: 'compute', component: ContentComponent, 
                children: [
                    { path: '', redirectTo: 'instances', pathMatch: 'full'},
                    { path: 'instances', component: VMInstancesComponent},
                    { path: 'groups', component: InstanceGroupsComponent},
                    { path: 'templates', component: InstanceTemplatesComponent},
                    { path: 'soletenant', component: SoleTenantNodesComponent},
                    { path: 'machineimages', component: MachineImagesComponent},
                    { path: 'disks', component: DisksComponent},
                    { path: 'snapshots', component: SnapshotsComponent},
                    { path: 'images', component: ImagesComponent},
                    { path: 'tpu', component: TPUSComponent},
                    { path: 'migrate', component: MigrateComponent},
                    { path: 'discounts', component: CommittedUseComponent},
                    { path: 'metadata', component: MetadataComponent},
                    { path: 'healthcheck', component: HealthCheckComponent},
                    { path: 'zones', component: ZonesComponent},
                    { path: 'endpoint', component: NetworkEndpointComponent},
                    { path: 'operations', component: OperationsComponent}
                ]
            }
        ]
    },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
