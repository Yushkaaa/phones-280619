import {BaseComponent} from "../../shared/componets/base.component.js";
//PhoneDetailsComponent наследует от BaseComponent
export class PhoneDetailsComponent extends BaseComponent{

  constructor({element, onBack, onAdd}){
    super({element});//кнопка назад, разобрать. Cложно,  очень сильно намудрено О_О
    this._onBack = onBack;
    this._onAdd = onAdd;
    this._element.addEventListener('click', (e)  =>{
      const backButton = e.target.closest('.back')
      const addButton = e.target.closest('.add')//добавление в корзину
      const img = e.target.closest('.thumb')
      //если попали в условие функции, например img = true, если нет то кнопка назад и тд
      //тк меняется только scr картинки, вся страница не перезакгружается
      if(img){
        this._currentImg.src = img.src;
        return;
      }
     
      if(backButton){
        this._onBack();
        return
      }
      if(addButton){
        this._onAdd(this._phone.id)
      }


    })
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
      const{name, description, images} = this._phone
        this._element.innerHTML = `
          <div>

    <img class="phone">

    <button class= "back">Back</button>
    <button class= "add">Add to basket</button>

      //засчет деструктивного присваивания мы можем убрать имя/описание/картинки
    <h1>${name}</h1>
    //описание из файла
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