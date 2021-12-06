import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import jsSHA from 'jssha'
import { User } from 'src/models/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  authData: FormGroup;

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.authData = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  alertAuth() {
    this.alertCtrl.create({
      header: "Incorrect email or password",
      buttons: ['Ok']
    }).then(res => {
      res.present();
    });
  }

  authenticateUser() {
    let shaObj = new jsSHA("SHA-256", "TEXT");

    const email = this.authData.value.email;
    const password = this.authData.value.password;
    shaObj.update(password);
    let hash = shaObj.getHash("HEX");

    this.userService.getUserByEmail(email).subscribe(u => {
      if(u == null) {
        this.alertAuth();
      } else if(u.password != hash) {
        console.log(hash);
        this.alertAuth();
      } else {
        if(u.userType == 1) { // is Lister (listing properties) ==> MyProperties
          // let navigationExtras: NavigationExtras = { state: { user: u } };
          this.router.navigate(['/my-properties', u]);
        } else if (u.userType == 2) { // is Renter (looking for properties) ==> Listings
          let navigationExtras: NavigationExtras = { state: { user: u } };
          this.router.navigate(['/listings'], navigationExtras);
        }
      }
    });
  }

}


