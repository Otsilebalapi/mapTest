import { Component } from '@angular/core';

import { MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Facilities',
      url: '/facilities',
      icon: 'list'
    },
    {
      title: 'Map',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];
  
  dark = false;
 
  
  constructor( 
    private menu: MenuController, 
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private platform: Platform,
    private storage: Storage) 
  {
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
