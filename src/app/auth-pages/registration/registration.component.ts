import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  username: any;
  password: any;
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}
  register(values: any) {
    this.username = values.username;
    this.password = values.password;
    
    this.registerService.register(this.username, this.password);
  }
}
