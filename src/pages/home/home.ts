import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
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
      "name": "missing 1!",
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
      "name": "missing 2!",
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
      "name": "missing 3!",
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
            "value": "1/2 cup of vanilla yogurt"
          },
          {
            "name": "milk",
            "value": "1/2 cup of milk"
          },
          {
            "name": "honey",
            "value": "2 teaspoons of honey"
          },
          {
            "name": "cinnamon",
            "value": "a pinch of cinnamon"
          },
          {
            "name": "ice",
            "value": "1 cup of ice (optional)"
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
            "value": "1 frozen banana"
          },
          {
            "name": "soy milk",
            "value": "1 cup of soy milk"
          },
          {
            "name": "peanut butter",
            "value": "1/4 cup of creamy peanut butter"
          },
          {
            "name": "wheat germ",
            "value": "1/4 cup of wheat germ"
          },
          {
            "name": "seedless strawberry",
            "value": "2 tablespoons seedless strawberry"
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
            "value": "2 bananas"
          },
          {
            "name": "date",
            "value": "3/4 cup chopped pitted dates"
          },
          {
            "name": "soy milk",
            "value": "1/2 cups of soy milk"
          },
          {
            "name": "lime",
            "value": "the juice of 1 lime"
          },
          {
            "name": "ice",
            "value": "1/2 cups of ice (optional)"
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
            "value": "1 banana"
          },
          {
            "name": "chocolate ice cream",
            "value": "1 cup of chocolate ice cream"
          },
          {
            "name": "milk",
            "value": "1/2 cups of soy milk"
          },
          {
            "name": "salt",
            "value": "a pinch of salt "
          },
          {
            "name": "ice",
            "value": "1/2 cups of ice (optional)"
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
    }
  ];

  // flashCards = [
  //   {
  //     front: {
  //       image: 'assets/imgs/smoothies.jpg',
  //       // subtitle: 'नमस्ते',
  //       title: 'Banana Smoothie'
  //       },
  //     back: {
  //       title: 'Banana Smoothie',
  //       // subtitle: 'Hello, Greetings, I bless the divine in you',
  //       content: 'It is used to greet people every time they meet. It is usually initiated by the juniors'
  //     }
  //   },
  //   {
  //     front: {
  //       image: 'assets/imgs/smoothies.jpg',
  //       title: '(Tapailai) Kasto chha?',
  //       // subtitle: '( तपाईंलाई ) कस्तो छ ?'
  //     },
  //     back: {
  //       title: 'Banana Smoothie',
  //       // subtitle: 'How are you?',
  //       content: 'It is used to ask people how they are doing or feeling.'
  //     }
  //   },
  //   {
  //     front: {
  //       image: 'assets/imgs/smoothies.jpg',
  //       title: 'Maaph garnuhos',
  //       // subtitle: 'माफ गर्नुहोस्'
  //     },
  //     back: {
  //       title: 'Banana Smoothie',
  //       // subtitle: 'Excuse me/ pardon me / Sorry',
  //       content: 'It is used to ask for forgiveness when you do make mistakes.'
  //     }
  //   }
  // ];
  @ViewChild("cameraInput")
  cameraInput: ElementRef;

  @ViewChild("browseFiles")
  browseFiles: ElementRef;

  @ViewChild(Slides)
  slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postPictureProvider: PostPictureProvider
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
    this.image = event;
    console.log(this.image);
    this.postPictureProvider.uploadFile(this.image).subscribe(
      data => {
        this.recipes = data;
        this.slides.slideTo(1);
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
