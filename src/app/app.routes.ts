import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// ,{useHash:true}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);