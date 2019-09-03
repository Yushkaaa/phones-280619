import {BaseComponent} from "../../shared/componets/base.component.js";
//PhoneDetailsComponent наследует от BaseComponent
export class PhoneDetailsComponent extends BaseComponent{
//отображает телефон 
    show(phone) {
        this._phone = phone;
        this._render();
        super.show();
    }
//Шаблон подробностей телефона
    _render() {
        this._element.innerHTML = `
          <div>

    <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button>Back</button>
    <button>Add to basket</button>


    <h1>Motorola XOOM™ with Wi-Fi</h1>

    <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

    <ul class="phone-thumbs">
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>
  </div>
        `
    }
}

let largeImg = document.querySelector('.phone');
let smallImg = document.querySelector('.phone-thumbs');

smallImg.onclick = function(e){
  let target = e.target;

  while(target != this ){
    if(target.nodeName == 'Img'){
      showSmall(target.src);
      return false;
    }
    target = target.parentNode;
    //console.log(target)
  }
  function showSmall(src) {
    largeImg.src = src;
  } 
}

let button = document.querySelector('.back')
button.onclick = function(){
  window.location.href = 'catalogue.html'
}

