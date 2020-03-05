import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';




@Component({
    
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

   
    filteredCourses:Course[] = [];
   
    _courses: Course[] = [];

    
    _filterBy:string;

    constructor(private courseService:CourseService) {

    }

    ngOnInit(): void {
        this._courses=this.courseService.retriveAll();
        this.filteredCourses = this._courses;

        //this.courses = [
        //    {
        //        id: 1,
          //      name: 'Angular: Forms',
            //    imageUrl: '/assets/images/forms.png',
              //  price: 99.99,
//                code: 'Abc123',
  //              duration: 120,
    //            rating: 8.4,
      //          releaseDate: 'November, 2, 2019',
        //        description:''
          //  },{
            //    id: 2,
              //  name: 'Angular: HTTP',
                //imageUrl: '/assets/images/http.png',
//                price: 45,
  //              code: 'Abc124',
    //            duration: 80,
      //          rating: 4,
        //        releaseDate:'December, 10, 2019',
          //      description:''
            //}
        //]
    }
    set filter(value: string){
            this._filterBy = value;
            this.filteredCourses = this._courses.filter((course:Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}