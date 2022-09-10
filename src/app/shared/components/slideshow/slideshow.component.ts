import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

 private max: Number = 0;

  constructor() { }

  ngOnInit(): void {

    // this.showSlides()

      let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    this.max = images.length;
    const valorMax = this.max;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= valorMax )
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)
  }









//   showSlides() {
//     let slideIndex = 0;
//     let i;
//     let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex - 1].className += " active";
//    setTimeout(this.showSlides, 2000);
//   }
}
