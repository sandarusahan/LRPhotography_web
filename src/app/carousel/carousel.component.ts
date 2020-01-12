import { ImgCarousel } from './../Models/img-carousel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  carouselItems:ImgCarousel[] = [{img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fletzterphoto.files.wordpress.com%2F2013%2F05%2Frrl_9517_5445-recovered.jpg",alt:"lrp party",subject:"Parties",subjectColor:"",buttonName:"Book Now",buttonColor:"btn-success",description:"yo yo",descriptionColor:""},
  {img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.fstoppers.com%2Fstyles%2Ffull%2Fs3%2Fmedia%2F2015%2F10%2F2_train_sean_molin_concert_music_photography_fstoppers.jpg",alt:"lrp event",subject:"Events",subjectColor:"",buttonName:"Book Now",buttonColor:"btn-primary",description:"events yo yo",descriptionColor:""},
  {img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmyzone-gcl4pavf1rrana.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F10%2Ftips-to-plan-a-Pre-Wedding-Shoot-in-Tamil-Nadu-.jpg",alt:"lrp pre shoots",subject:"Wedding Pre Shoots",subjectColor:"",buttonName:"Call Us",buttonColor:"btn-warning",description:"preshoot yo yo",descriptionColor:""},
  {img:"https://www.christianothstudio.com/images/made/_images/home/170902AROALA0075_4_960_641_85auto_s_c1.jpg",alt:"lrp wedding",subject:"Wedding",subjectColor:"",buttonName:"Call Us",buttonColor:"btn-secondary",description:"preshoot yo yo",descriptionColor:""}];
  constructor() { }

  ngOnInit() {
  }

}
