import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { ContentRouting } from './content.routing';
import { ContentService } from './content.service';
import { ContentHeadComponent } from './head/head.component';
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

@NgModule({
  declarations: [
    ContentHeadComponent,
    ContentComponent,
    CommittedUseComponent,
    DisksComponent,
    HealthCheckComponent,
    ImagesComponent,
    InstanceGroupsComponent,
    InstanceTemplatesComponent,
    MachineImagesComponent,
    MetadataComponent,
    MigrateComponent,
    NetworkEndpointComponent,
    OperationsComponent,
    SnapshotsComponent,
    SoleTenantNodesComponent,
    TPUSComponent,
    VMInstancesComponent,
    ZonesComponent,
    ApplicationsComponent,
    ClustersComponent,
    ConfigurationsComponent,
    MigrateContrainerComponent,
    ObjectBrowserComponent,
    ServicesIngressComponent,
    StorageComponent,
    WorkLoadsComponent
  ],
  imports: [
      CommonModule,
      ContentRouting,
      HttpClientModule
  ],
  providers: [
      ContentService
  ]
})
export class ContentModule { }
