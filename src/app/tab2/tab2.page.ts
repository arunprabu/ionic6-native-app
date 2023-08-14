import { Component } from '@angular/core';
// required plugins from capacitor
import { Camera, CameraResultType } from '@capacitor/camera';;
// Sanitizer from angular to safely sanitize urls
import { DomSanitizer } from '@angular/platform-browser';

// REFER: https://ionicframework.com/docs/v6/native/camera
// npm install @capacitor/camera
// npx cap sync
// npm run build
// DO NOT FORGET TO INSTALL AND SETUP FOR PWA
// npm install @ionic/pwa-elements
// refer the setup in main.ts
// https://capacitorjs.com/docs/web/pwa-elements

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  photo = ''; // url of the photo location in your device's storage

  constructor(private sanitizer: DomSanitizer) { // dep injection

  }

  async takePhoto() {
    
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;

      // Can be set to the src of an image now
      // imageElement.src = imageUrl;
      console.log(imageUrl);

      this.photo = imageUrl as string;
  }

}