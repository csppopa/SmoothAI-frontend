import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage,  LoadingController, NavController, NavParams, Slides} from 'ionic-angular';
import {PostPictureProvider} from "../../providers/post-picture/post-picture";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  image: any;
  slidesMoving: boolean;
  recipes: any = [
    {
      "name": "J-Smoothie fo' hangover'",
      "ingredients":
        [
          {
            "name": "strawberry",
            "value": "200g"
          },
          {
            "name": "lemon",
            "value": "1 piece"
          },
          {
            "name": "grapes",
            "value": "200g"
          }
        ],
      "preparation":
        [
          "De-seed the grapes and the lemon",
          "Pass strawberries through a sieve",
          "Put everything in blender",
          "Blend thoroughly"
        ],
      "serves": 1
    },
    {
      "name": "J-Smoothie orange Mania",
      "ingredients":
        [
          {
            "name": "grapefruit",
            "value": "1 large piece"
          },
          {
            "name": "orange",
            "value": "2 pieces"
          },
          {
            "name": "mint leaves",
            "value": "3-4 twigs"
          }
        ],
      "preparation":
        [
          "De-seed grapefruit and orange",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "J-Smoothie bananas on the rise",
      "ingredients":
        [
          {
            "name": "banana",
            "value": "2 very ripe pieces"
          },
          {
            "name": "cellery",
            "value": "2 stalks"
          },
          {
            "name": "lemon",
            "value": "1 small"
          }
        ],
      "preparation":
        [
          "De-seed and peel lemon",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "SoloBanana Smoothie",
      "ingredients":
        [
          {
            "name": "banana",
            "value": "2 very ripe pieces"
          },
          {
            "name": "vanilla yogurt",
            "value": "1/2 cup"
          },
          {
            "name": "milk",
            "value": "1/2 cup"
          },
          {
            "name": "honey",
            "value": "2 teaspoons"
          },
          {
            "name": "cinnamon",
            "value": "a pinch of it"
          },
          {
            "name": "ice",
            "value": "1 cup (optional)"
          }
        ],
      "preparation":
        [
          "Peel the banana",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "Banana PB&J",
      "ingredients":
        [
          {
            "name": "banana",
            "value": "1 frozen"
          },
          {
            "name": "soy milk",
            "value": "1 cup"
          },
          {
            "name": "peanut butter",
            "value": "1/4 cup"
          },
          {
            "name": "wheat germ",
            "value": "1/4 cup"
          },
          {
            "name": "seedless strawberry",
            "value": "2 tablespoons"
          }
        ],
      "preparation":
        [
          "Peel the banana",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "Triple Date",
      "ingredients":
        [
          {
            "name": "banana",
            "value": "2 pieces"
          },
          {
            "name": "date",
            "value": "3/4 cup (chopped pitted)"
          },
          {
            "name": "soy milk",
            "value": "1/2 cups"
          },
          {
            "name": "lime",
            "value": "the juice of 1 piece"
          },
          {
            "name": "ice",
            "value": "1/2 cups (optional)"
          }
        ],
      "preparation":
        [
          "Peel the banana",
          "Chop the dates",
          "Squeeze the lime",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "Ebony Banana (wink)",
      "ingredients":
        [
          {
            "name": "banana",
            "value": "1"
          },
          {
            "name": "chocolate ice cream",
            "value": "1 cup"
          },
          {
            "name": "milk",
            "value": "1/2 cups"
          },
          {
            "name": "salt",
            "value": "a pinch of it "
          },
          {
            "name": "ice",
            "value": "1/2 cups(optional)"
          }
        ],
      "preparation":
        [
          "Peel the banana",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "Carrot Apple",
      "ingredients":
        [
          {
            "name": "carrot",
            "value": "1 cup of juice"
          },
          {
            "name": "apple",
            "value": "1 cup of juice"
          },
          {
            "name": "ice",
            "value": "1 1/2 cup"
          }
        ],
      "preparation":
        [
          "Make Apple juice",
          "Make Carrot juice",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    },
    {
      "name": "PeanutButter Apple",
      "ingredients":
        [
          {
            "name": "apple",
            "value": "1 (chopped and peeled)"
          },
          {
            "name": "peanut butter",
            "value": "3 tablespoons"
          },
          {
            "name": "flaxseeds",
            "value": "2 tablespoons"
          },
          {
            "name": "soy milk",
            "value": "1 1/2 cups"
          },
          {
            "name": "ice",
            "value": "1 1/2 cups"
          },
          {
            "name": "honey",
            "value": "to taste"
          }
        ],
      "preparation":
        [
          "Peel and chop the apple",
          "Put everything in blender",
          "Blend thoroughly",
          "Pass through a sieve"
        ],
      "serves": 1
    }
  ];


  smoothieFab: ElementRef;

  @ViewChild("cameraInput")
  cameraInput: ElementRef;

  @ViewChild("browseFiles")
  browseFiles: ElementRef;

  @ViewChild(Slides)
  slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postPictureProvider: PostPictureProvider,
    public loadingController: LoadingController
  ) {
  }

  clickBrowseFiles() {
    this.browseFiles.nativeElement.click();
  }

  imageTaken(){
    this.uploadFile(this.cameraInput.nativeElement.files[0]);
  }

  fileSelected(){
    this.uploadFile(this.cameraInput.nativeElement.files[0]);
  }

  uploadFile(event) {

    let loader = this.loadingController.create({
      spinner: 'default',
      content: "Fetching recipes..."
    });
    loader.present();
    this.image = event;
    console.log(this.image);
    this.postPictureProvider.uploadFile(this.image).subscribe(
      data => {
        this.recipes = data;
        this.slides.slideTo(1);
        loader.dismiss();
        // console.log(data);
      }
    )
  }

  takePicture() {
    this.cameraInput.nativeElement.click();

    // Doesn't work for PWA :( but for native app yes
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    //
    // this.camera.getPicture(options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64:
    //
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    //
    //   // this.images.push(base64Image);
    // }, (err) => {
    //   console.log(err);
    //   // Handle error
    // });
  }

  slideDidChange () {
    // if(this.slides.getActiveIndex() == 1){
    //   this.slidesMoving = false;
    //   let slideIndex : number = this.slides.getActiveIndex();
    //   let currentSlide : Element = this.slides._slides[slideIndex];
    //   this.slidesHeight = currentSlide.clientHeight;
    // } else {
    //
    //   this.slidesMoving = false;
    //   let slideIndex : number = this.slides.getActiveIndex();
    //   let currentSlide : Element = this.slides._slides[slideIndex];
    //   this.slidesHeight = currentSlide.clientHeight;
    // }
  }
  slideWillChange () {
    if(this.slides.getActiveIndex() == 1){
      this.slidesMoving = true;
    } {

      if(this.slides.getActiveIndex() == 0){
        this.slidesMoving = false;
      }
    }
  }


  ionViewDidLoad() {
    this.slides.initialSlide = 0;

    console.log('ionViewDidLoad HomePage');
  }



}
