import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from 'src/models/user.model';
import jsSHA from 'jssha'
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  userData: FormGroup;

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.userData = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  createUser() {

    if (
      this.userData.value.firstName == "" ||
      this.userData.value.lastName == "" ||
      this.userData.value.userType == "" ||
      this.userData.value.email == "" ||
      this.userData.value.password == ""
    ) {
        this.alertCtrl.create({
          header: "Warning",
          subHeader: "please fill in all fields",
          buttons: ["OK"]
        }).then(res => {
          res.present();
        });
      } else if(!(this.userData.value.email.indexOf('@') >= 1 && this.userData.value.email.indexOf('.') >= 3)) {
        this.alertCtrl.create({
          header: "Enter Valid Email",
          subHeader: "enter valid email",
          buttons: ["OK"]
        }).then(res => {
          res.present();
        });
      } else {
        let shaObj = new jsSHA("SHA-256", "TEXT");
        shaObj.update(this.userData.value.password);
        let password_hashed = shaObj.getHash("HEX");
        const userObj = {
          firstName: this.userData.value.firstName,
          lastName: this.userData.value.lastName,
          userType: parseInt(this.userData.value.userType,10),
          email: this.userData.value.email,
          password: password_hashed
        }
        this.userService.getUserByEmail(userObj.email).subscribe(u => {
          if(u != null) {
            this.alertCtrl.create({
              header: "User Exists Already",
              subHeader: "A user with this email exists. Please login.",
              buttons: ["OK"]
            }).then(res => {
              res.present();
            });
          } else { // can create new user
            let shaObj = new jsSHA("SHA-256", "TEXT");
            const newUser = new User(
              userObj.firstName,
              userObj.lastName,
              userObj.userType,
              1,
              Date.now(),
              userObj.email,
              userObj.password
            );

            this.userService.createUser(newUser).subscribe(res => {
              this.alertCtrl.create({
                header: "Account Successfully Created",
                subHeader: "Login now to access your account",
                buttons: [
                  {
                    text: 'Login',
                    handler: () => {
                      let navigationExtras: NavigationExtras = { state: { user: res } };
                      this.router.navigate(['/login'], navigationExtras);
                    }
                  }
                ]
              }).then(res => {
                res.present();
              });

            });
          }
        });
      }
  }

}
