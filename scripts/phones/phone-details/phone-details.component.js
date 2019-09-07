import {BaseComponent} from "../../shared/componets/base.component.js";
//PhoneDetailsComponent наследует от BaseComponent
export class PhoneDetailsComponent extends BaseComponent{

  constructor({element}) {
    super({element});
    this.on('click', '.thumb', (e) => {
        this._currentImg.src = e.delegateTarget.src;
    });
    this.on('click', '.add', (e) => {
        this.emitEvent('add-to-cart', this._phone.id)
    });
    this.on('click', '.back', (e) => {
        this.emitEvent('back')
    });
}


//отображает телефон 
    show(phoneDetails) {
        this._phone = phoneDetails;
        this._render();
        this._currentImg = this._element.querySelector('.phone')
        this._currentImg.src = this._phone.images[0];//ставим первое фото из списка
        super.show();
    }
//Шаблон подробностей телефона
    _render() {
      const{name, description, images} = this._phone;
      this._element.innerHTML = `
      <div>

    <img class="phone">

    <button class= "back">Back</button>
    <button class= "add">Add to basket</button>
    <h1>${name}</h1>
    <p>${description}</p>
    <ul class="phone-thumbs">
    
    ${images.map((src) => `
         <li>
        <img src=${src} class="thumb">
      </li>
    `).join('')}
    </ul>
  </div>
        `
    }
}

// let largeImg = document.querySelector('.phone');
// let smallImg = document.querySelector('.phone-thumbs');

// smallImg.onclick = function(e){
//   let target = e.target;

//   while(target != this ){
//     if(target.nodeName == 'Img'){
//       showSmall(target.src);
//       return false;
//     }
//     target = target.parentNode;
//     //console.log(target)
//   }
//   function showSmall(src) {
//     largeImg.src = src;
//   } 
// }
// // //кнопка назад
// let button = document.querySelector('.back')
// button.onclick = function(){
//   window.location.href = 'catalogue.html'
// }




///////////////////////////////////////////////////////////////
// Метод Element.closest() возвращает ближайший 
//родительский элемент (или сам элемент), который 
//соответствует заданному CSS-селектору или null, 
//если таковых элементов вообще нет.

//event.target содержит элемент, на котором сработало событие