import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public id: number = null,
    public name: string = "",
    public address: string = "",
    public city: string = "",
    public state: string = "",
    // public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public confirmPassword: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
// platorm validation forms
  ngOnInit() {
  }

}
