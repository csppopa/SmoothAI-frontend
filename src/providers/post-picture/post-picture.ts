import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";

/*
  Generated class for the PostPictureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostPictureProvider {

  constructor(
    private http: HttpClient) {
  }

  public uploadFile(image: File): Observable<any> {
    let formData = new FormData();
    formData.append('uploadedFile', image);
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append( 'enctype', 'multipart/form-data' );

    return this.http.post(
      "/api/recipes",
      formData,
      {headers: headers}
      );

  }

  uploadFileNative(imageUri:string, uploadUrl:string) {
    // const fileTransfer: FileTransferObject = this.transfer.create();
    //
    // let options: FileUploadOptions = {
    //   fileKey: 'ionicfile',
    //   fileName: 'ionicfile',
    //   chunkedMode: false,
    //   mimeType: "image/jpeg",
    //   headers: {}
    // }
    //
    // fileTransfer.upload(imageUri, uploadUrl, options)
    //   .then((data) => {
    //     console.log(data+" Uploaded Successfully");
    //   }, (err) => {
    //     console.log(err);
    //   });
  }

}
