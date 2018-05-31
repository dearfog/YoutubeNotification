import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public splashScreen: SplashScreen, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');

    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
      this.navCtrl.push('LoginPage');
    }, 4000);
 
  }
  // <preference name="FadeSplashScreen" value="false"/>
  // <preference name="AutoHideSplashScreen" value="false"/>
}
