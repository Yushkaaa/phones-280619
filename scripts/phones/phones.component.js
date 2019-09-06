import {PhonesCatalogComponent} from './phones-catalog/phones-catalog.component.js'
import {PhoneDetailsComponent} from './phone-details/phone-details.component.js'
import {PhonesService} from './phones.service.js'
import { CartComponent } from './cart/cart.component.js';



export class PhonesComponent {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initCart();
        this.initDetails();
        
    }

    _initCatalog(){
        this._catalog = new PhonesCatalogComponent({
            element: this._element.querySelector('.phones-catalog'),
            phones: PhonesService.getAll(),
            onPhoneSelect: (phoneId) => {
                this._phoneId = phoneId;
                const phonesDetails = PhonesService.getOneById(phoneId);
                this._catalog.hide();
                this._details.show(phonesDetails);
            }
        });

    }
    _initDetails(){
        this._details = new PhoneDetailsComponent({
            element: this._element.querySelector('.phone-details'),
            //метод Back
            onBack : () =>{
                console.log(this)
                this._catalog.show();
                this._details.hide();

            },
            onAdd: (phoneId)=>{
                this._cart.add(this._phoneId);
            }
        });

    }
    //корзина
    _initCart(){
        this._cart = new CartComponent({
            element: this._element.querySelector('.cart')
        })

    }

    _render() {
        this._element.innerHTML = `
            <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
            <section>
                <p>
                    Search:
                    <input>
                </p>

                <p>
                    Sort by:
                    <select>
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </p>
            </section>

            <section class = "cart>
             
            </section>
        </div>

        <!--Main content-->
        <div class="col-md-10">
            <div class="phones-catalog"></div>
            <div class="phone-details"></div>
        </div>
    </div>`
    }

}
