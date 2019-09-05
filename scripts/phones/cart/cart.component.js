import {BaseComponent} from "../../shared/componets/base.component.js";

export class CartComponent extends BaseComponent{
    constructor({element}){
        super({element});
        this._render();
    }
  

//Шаблон подробностей телефона
    _render() {
        this._element.innerHTML = `
        <p>Shopping Cart</p>
        <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
        </ul>
          
        `
    }
}

