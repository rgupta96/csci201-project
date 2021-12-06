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
  user?: User;
  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(p => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state);
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user);
      }

      this.authData = new FormGroup({
        email: new FormControl((this.user == null) ? '' : this.user.email, Validators.required),
        password: new FormControl('', Validators.required)
      });
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

  continueAsGuest() {
    this.router.navigate(['/listings']);
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
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
          let navigationExtras: NavigationExtras = { state: { user: u } };
          this.router.navigate(['/my-properties'], navigationExtras);
        } else if (u.userType == 2) { // is Renter (looking for properties) ==> Listings
          let navigationExtras: NavigationExtras = { state: { user: u } };
          this.router.navigate(['/listings'], navigationExtras);
        }
      }
    });
  }

}


