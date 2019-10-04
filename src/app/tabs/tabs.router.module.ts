import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'input-page',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../input-page/input-page.module').then(m => m.InputPagePageModule)
              }
            ] 
          },
          {
            path: 'results',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../results/results.module').then(m => m.ResultsPageModule)
              }
            ]
          },
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'dataview',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../dataview/dataview.module').then(m => m.DataviewPageModule)
              }
            ]
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'historyview',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../historyview/historyview.module').then(m => m.HistoryviewPageModule)
              }
            ]
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
