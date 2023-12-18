import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trucks',
        loadChildren: () => import('../trucks/trucks.module').then(m => m.TrucksPageModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('../cities/cities.module').then(m => m.CitiesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cities',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trucks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
