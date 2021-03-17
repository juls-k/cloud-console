import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { CommittedUseComponent } from './pages/compute/committed-use/committed-use.component';
import { DisksComponent } from './pages/compute/disks/disks.component';
import { HealthCheckComponent } from './pages/compute/health-check/health-check.component';
import { ImagesComponent } from './pages/compute/images/images.component';
import { InstanceGroupsComponent } from './pages/compute/instance-groups/instance-groups.component';
import { InstanceTemplatesComponent } from './pages/compute/instance-templates/instance-templates.component';
import { MachineImagesComponent } from './pages/compute/machine-images/machine-images.component';
import { MetadataComponent } from './pages/compute/metadata/metadata.component';
import { MigrateComponent } from './pages/compute/migrate/migrate.component';
import { NetworkEndpointComponent } from './pages/compute/network-endpoint/network-endpoint.component';
import { OperationsComponent } from './pages/compute/operations/operations.component';
import { SnapshotsComponent } from './pages/compute/snapshots/snapshots.component';
import { SoleTenantNodesComponent } from './pages/compute/soletenant-nodes/soletenant-nodes.component';
import { TPUSComponent } from './pages/compute/tpus/tpus.component';
import { VMInstancesComponent } from './pages/compute/vminstance/vminstances.component';
import { ZonesComponent } from './pages/compute/zones/zones.component';
import { ApplicationsComponent } from './pages/kubernetes/applications/applications.component';
import { ClustersComponent } from './pages/kubernetes/clusters/clusters.component';
import { ConfigurationsComponent } from './pages/kubernetes/configurations/configurations.component';
import { MigrateContrainerComponent } from './pages/kubernetes/migrate-container/migrate-container.component';
import { ObjectBrowserComponent } from './pages/kubernetes/object-browser/object-browser.component';
import { ServicesIngressComponent } from './pages/kubernetes/services-ingress/services-ingress.component';
import { StorageComponent } from './pages/kubernetes/storage/storage.component';
import { WorkLoadsComponent } from './pages/kubernetes/workloads/workloads.component';

const ContentRoutes: Routes = [
    { path: '', component: ContentComponent, 
        children: [
            { path: '', redirectTo: 'compute', pathMatch: 'full'},
            { path: 'compute',
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
            },
            { path: 'kubernetes',
                children: [
                    { path: '', redirectTo: 'clusters', pathMatch: 'full'},
                    { path: 'applications', component: ApplicationsComponent},
                    { path: 'clusters', component: ClustersComponent},
                    { path: 'configurations', component: ConfigurationsComponent},
                    { path: 'migratecontainer', component: MigrateContrainerComponent},
                    { path: 'objectbrowser', component: ObjectBrowserComponent},
                    { path: 'servicesingress', component: ServicesIngressComponent},
                    { path: 'storage', component: StorageComponent},
                    { path: 'workloads', component: WorkLoadsComponent}
                ]
            }
        ]
    }
];
export const ContentRouting = RouterModule.forChild(ContentRoutes);
