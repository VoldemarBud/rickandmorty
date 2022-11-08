import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'character-list',
        pathMatch: 'full'
    },
    {
        path: 'character-list',
        component: CharacterListComponent
    },
    {
        path: 'character/:id',
        component: CharacterDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharacterRoutingModule { }