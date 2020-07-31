import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService} from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  topic=['angular','react','vue'];
  userModel= new User('Rob','asd@gmail.com',1234567890,12223242526278,'','morning',true);
  users: Array<any>=[];
  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.userModel)
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>console.log('success!',data),
      error=>console.error('Error!',error)
    )
    
  };

}
