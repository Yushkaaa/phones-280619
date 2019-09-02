import {BaseComponent} from "../../shared/componets/base.component.js";
//PhonesCatalogComponent наследует от BaseComponent
export class PhonesCatalogComponent  extends BaseComponent {
    constructor({element, phones, onPhoneSelect}) {
        // super используется для вызова функций, принадлежащих родителю объекта.
        super({element})
        this._phones = phones;
        this._onPhoneSelect = onPhoneSelect;
        this._render();
        //вещаем событие
        this._element.addEventListener('click', (e) => {
            let phoneEl = e.target.closest('.phone');
            //если клик не на "phoneEl"//
            if (!phoneEl) {
                return;
            }
            this._onPhoneSelect(phoneEl.dataset.phoneId);
        })
    }

    _render() {
        this._element.innerHTML = `
                    <ul class="phones">
                    //не совсем поняла конструкцию с map
                 ${this._phones.map((phone) => `
               <li class="thumbnail phone" data-phone-id=${phone.id}>
                    <a href="#!/phones/${phone.id}" class="thumb">
                        <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success">
                            Add
                        </a>
                    </div>

                    <a href="#!/phones/${phone.id}">${phone.name}</a>
                    // snippet - берем из файла json
                    <p>${phone.snippet}</p>
                </li>`).join('')}   
            </ul>
        `
    }

}
