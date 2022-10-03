class SimpleSlider{
   constructor({el, active}){
      this.slider = el instanceof HTMLElement ? el : document.querySelector(el);
      this.active = active;
      this.sliderItems = this.slider.querySelectorAll('.slider__item');
      this.prev = this.slider.querySelector('.slider__prev');
      this.next = this.slider.querySelector('.slider__next');
      this.prev.addEventListener('click', () => this.moveSlider(this.prev));
      this.next.addEventListener('click', () => this.moveSlider(this.next));
      this.setClass();
   }
   moveSlider(btn){
      if(btn == this.next) {
         this.active++;
         if (this.active > this.sliderItems.length - 1) this.active = 0; 
      }
      if(btn == this.prev) {
         this.active--;
          if(this.active < 0) this.active = this.sliderItems.length - 1;
      }
      this.setClass();
   }
   setClass(){
      this.sliderItems.forEach(item => {
         item.classList.remove('active');
      });
      this.sliderItems[this.active].classList.add('active');
   }
}
const mySlider = new SimpleSlider({
   el: '.slider',
   active: 0
});


