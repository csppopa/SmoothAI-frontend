import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/*
  Generated class for the PostPictureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostPictureProvider {

  constructor(
    private http: HttpClient,
    private transfer: FileTransfer) {
  }

  uploadFile(imageUri:string, uploadUrl:string) {
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(imageUri, uploadUrl, options)
      .then((data) => {
        console.log(data+" Uploaded Successfully");
      }, (err) => {
        console.log(err);
      });
  }

}
