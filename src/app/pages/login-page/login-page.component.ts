import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from '../../core/services/request.service';
import { MainRequestServiceService } from '../../core/services/main-request-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  providers: [MainRequestServiceService, RequestService]
})
export class ContactPageComponent {

  imageUrl: string = ''


  contactList: any[] = [
    {
      imageUrl: '',
      status: '#28C345',
      name: 'Nicholas Gordon',
      title: 'Developer'
    },
    {
      imageUrl: "./assets/icons/person_1.png",
      status: '#F6933E',
      name: 'Bradley Malone',
      title: 'Sales Manager'
    },
    {
      imageUrl: "./assets/icons/person_2.png",
      status: '#28C345',
      name: 'Johanna Stevens',
      title: 'Project Manager'
    },
    {
      imageUrl: "./assets/icons/person_3.png",
      status: '#F6933E',
      name: 'Marvin Lambert',
      title: 'Designer'
    },
    {
      imageUrl: "",
      status: '#F6933E',
      name: 'Teresa Lloyd',
      title: 'PR agent'
    },

    {
      imageUrl: "./assets/icons/person_5.png",
      status: '#F6933E',
      name: 'Fred Haynes',
      title: 'Support Team'
    },

    {
      imageUrl: "./assets/icons/person_6.png",
      status: '#F6933E',
      name: 'Rose Peters',
      title: 'Project Manager'
    },

    {
      imageUrl: '',
      status: '#28C345',
      name: 'Brian Watson',
      title: 'Developer'
    },

    {
      imageUrl: '',
      status: '#28C345',
      name: 'Hettie Richardson',
      title: 'Developer'
    },

  ]
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService, private requestService: RequestService) {
  }

}
