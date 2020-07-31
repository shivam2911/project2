import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { EnrollmentService} from './show.service';
import { User } from './user';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  @Output() passedEvent=new EventEmitter();
  @ViewChild('modal', { static: false }) 
  modal: any;
  constructor(private _enrollmentService:EnrollmentService) { }
  
  user=new User('ram',120304050,'')
  users: Array<any>=[];
  dta=[]
  userid=[]
  ngOnInit(){
    this. _enrollmentService.get()
    .subscribe(
      data =>{
        this.users=data
      }
    )
  }
  onSubmit(){
    this.userid=this.dta,
    this._enrollmentService.enroll(this.user,this.userid)
    .subscribe(
      data=>{console.log('data sucsess ');this.modal.hide();this.ngOnInit();},
      error=>console.error('Error!',error)
    )
    
  };
  delete(userId){
    this._enrollmentService.delete(userId)
      .subscribe(
        data => {console.log('data deleted ');this.ngOnInit();}
      )
  
}
getI(userId){
  this.dta=userId
 this.modal.show();
  this._enrollmentService.geti(userId)
  .subscribe(
    data=>{this.user=data}
  
  ) 
  console.log(this.user)
  //this.dta=this.userModel
  //this.passedEvent.emit(this.userModel);
}
}




  
 
  
 
  
  
  
