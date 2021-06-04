import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AotSummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  privileges = [
    {
      id :1 , name : 'a'
    },
    {
      id :2 , name : 'b'
    },
    {
      id :3 , name : 'c'
    },
    {
      id :4, name : 'd'
    },
    {
      id :5, name : 'e'
    },
    {
      id :6 , name : 'f'
    },
    {
      id :7 , name : 'g'
    },
    {
      id :8 , name : 'h'
    },
    {
      id :9 , name : 'i'
    },
    {
      id :10 , name : 'j'
    },

    {
      id :11, name : 'k'
    },
    {
      id :12, name : 'l'
    },
    {
      id :13, name : 'm'
    },
    {
      id :14, name : 'n'
    },
    {
      id :15, name : 'o'
    },
    {
      id :16, name : 'p'
    },
    {
      id :17, name : 'q'
    },
    {
      id :18, name : 'r'
    },
    {
      id :19, name : 's'
    },
    {
      id :20, name : 't'
    },


  ];
  array: any =[];
  loginForm:FormGroup;
  constructor(private fb : FormBuilder){

  }
  ngOnInit() {
    this.loginForm =this.fb.group({
      email : ['',Validators.compose([Validators.required,Validators.pattern(/^([\w.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)])],
      password : ['',Validators.compose([Validators.required,Validators.pattern(/^A-Za-z0-9*$/)])]
    })
  }
  selectItem(data : any)
  {
    debugger
    if (this.privileges.some(element => element.id === data.id)) {
      for (let i = 0; i <= this.privileges.length; i++) {
        if (this.privileges[i].id === data.id) {
         document.getElementById(data).classList.remove('mystyle');
          this.privileges.splice(i, 1);
          console.log(this.privileges);
          i = this.privileges.length;
        }
      }
    }
    else {
       document.getElementById(data).classList.add('mystyle');
      this.privileges.push(data);
      console.log(this.privileges);
    }}
}