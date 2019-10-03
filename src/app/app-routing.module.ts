import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'input-page', loadChildren: './input-page/input-page.module#InputPagePageModule' },  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'historyview', loadChildren: './historyview/historyview.module#HistoryviewPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
