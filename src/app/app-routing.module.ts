import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
    { path: '', component: DevicesComponent },
    { path: 'history', component: HistoryComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
