import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { erro404Component } from './courses/pageError/errorPage.component';
import { courseInfoComponent } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    erro404Component,
    courseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
      {
        path: 'courses' , component: CourseListComponent
      },
      { path: 'courses/info/:id' , component: courseInfoComponent

      },
      {
        path: '', redirectTo: 'courses' , pathMatch: 'full'
      },
      
      {
        path:'**', component: erro404Component
      }

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//todas vez que criar um componente, colocar no html.index e declarar no modulo que corresponde a ele, até o momento aqui no app.modules