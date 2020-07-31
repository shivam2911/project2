import { Component} from '@angular/core';
import { User } from './user';
import { EnrollmentService} from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent  {
  userModel= new User('rob',12,'')
  users: Array<any>=[];
  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.userModel)
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>{console.log('success!',data);  
    },
      error=>console.error('Error!',error)
    )
    
  };

}
