import { Component } from '@angular/core';

import { SmartCheck } from '../../../www/plugins/plugin-SmartCheck/www/SmartCheck';

declare let SmartCheck: any;


@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  phoneNumber: string = "";
  password: string = "";
  constructor() {
  }

  sendInformation() {
    console.log(this.phoneNumber);
    console.log(this.password);

    //SmartCheck.exec(null, null, "SmartCheck", "scan", ["front"]);
  }
}

/*
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'SmartCheck',
  plugin: 'io.electrosoft.helloworld', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.HelloWorld', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HelloWorld extends IonicNativePlugin {

  @Cordova()
  nativeToast(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}*/