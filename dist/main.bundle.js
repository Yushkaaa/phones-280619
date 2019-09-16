/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phones_phones_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

new _phones_phones_component_js__WEBPACK_IMPORTED_MODULE_0__["PhonesComponent"]({element: document.querySelector('.content')});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesComponent", function() { return PhonesComponent; });
/* harmony import */ var _phones_catalog_phones_catalog_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _phone_details_phone_details_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _cart_cart_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _phones_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _filter_filter_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);






class PhonesComponent {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initDetails();
        this._initCart();
        this._initFilter();
    }

    _initCatalog(){
        this._catalog = new _phones_catalog_phones_catalog_component_js__WEBPACK_IMPORTED_MODULE_0__["PhonesCatalogComponent"]({
            element: this._element.querySelector('.phones-catalog'),
            // phones: PhonesService.getAll()
        });
        this._showFilteredPhones();

        this._catalog.onEvent('phone-select', async ({detail: phoneId}) => {
            try {
                this._phoneId = phoneId;
                const details = await _phones_service_js__WEBPACK_IMPORTED_MODULE_3__["PhonesService"].getOneById(phoneId)
                this._catalog.hide();
                this._details.show(details);
            } catch (err) {
                console.log(err)
            }


        });
        this._catalog.onEvent('add-to-cart', ({detail: phoneId}) => {
            this._cart.add(phoneId);
        });
    }
    
    _initDetails(){
        this._details = new _phone_details_phone_details_component_js__WEBPACK_IMPORTED_MODULE_1__["PhoneDetailsComponent"]({
            element: this._element.querySelector('.phone-details')
        });
            //назад
            this._details.onEvent('back',()=>{
                this._showFilteredPhones();
                this._details.hide();
            })
            //корзина
            this._details.onEvent('add-to-cart',({detail: phoneId})=>{
                //console.log(this)
                this._cart.add(this._phoneId);
            })

    }
    //корзина
    _initCart(){
        this._cart = new _cart_cart_component_js__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]({
            element: this._element.querySelector('.cart')
        })
    }

    _initFilter(){
        this._filter = new _filter_filter_component_js__WEBPACK_IMPORTED_MODULE_4__["FilterComponent"]({
            element: this._element.querySelector('.phones-filter')

        });

        this._filter.onEvent('search', ({detail: text}) => {
            //console.log(text);
            this.text = text;
            this._showFilteredPhones();
        });
        this._filter.onEvent('change-order', ({detail: orderBy}) => {
            //console.log(orderBy)
            this.orderBy = orderBy;
            this._showFilteredPhones();
        });
    }
    async _showFilteredPhones() {
        const phones = await _phones_service_js__WEBPACK_IMPORTED_MODULE_3__["PhonesService"].getAll({text: this.text, orderBy: this.orderBy})
        this._catalog.show(phones)
    } 

    _render() {
        this._element.innerHTML = `
            <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
            <section class="phones-filter">
                
            </section>

            <section class = "cart">
             
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phones", function() { return phones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesCatalogComponent", function() { return PhonesCatalogComponent; });
/* harmony import */ var _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _phones_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



const phones = _phones_service_js__WEBPACK_IMPORTED_MODULE_1__["PhonesService"].getAll();

//PhonesCatalogComponent наследует от BaseComponent
class PhonesCatalogComponent  extends _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor({element}) {
        super({element});
        this._phones = [];
        // this._render();
        this.on('click', '.phone', (e) => {
            this.emitEvent('phone-select', e.delegateTarget.dataset.phoneId)
        });
        this.on('click', '.add-to-cart', (e) => {
            this.emitEvent('add-to-cart', e.delegateTarget.dataset.phoneId)
        });
    }
    show(phones){
        this._phones = phones;
        this._render()
        super.show();
    }

    _render() {
        this._element.innerHTML = `
                    <ul class="phones">
                    
                 ${this._phones.map((phone) => `
               <li class="thumbnail">
                    <a href="#!/phones/${phone.id}" class="thumb">
                        <img class="phone" alt="${phone.name}"  data-phone-id=${phone.id} src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper add-to-cart" data-phone-id=${phone.id}>
                        <a class="btn btn-success">
                            Add
                        </a>
                    </div>

                    <a href="#!/phones/${phone.id}">${phone.name}</a>
                   
                    <p>${phone.snippet}</p>
                </li>`).join('')}   
            </ul>
        `
    }

}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });

class BaseComponent {
    constructor({element}) {
        this._element = element;
    }

    show(){
        this._element.hidden = false;
    }

    hide(){
        this._element.hidden = true;
    }
//добавть методы on, onEvent, emitEvent

    on(eventName, selector, cb){
        this._element.addEventListener(eventName,(e) =>{
            const el = e.target.closest(selector);
            if(!el){
                return;
            }
            e.delegateTarget = el;

            cb(e)
        })
    }

    onEvent(eventName, cb) {
        this._element.addEventListener(eventName, cb)
    }

    //имя(какой эл),
    emitEvent(eventName, details) {
        const event = new CustomEvent(eventName, {detail: details});
        this._element.dispatchEvent(event);
    }
    
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesService", function() { return PhonesService; });
const BASE_URL = 'http://localhost:3000';

const PhonesService = new class {
    constructor() {
        console.log(1);
    }

    getAll({text, orderBy} = {}, cb) {
        return this._sendRequest( `/phones/phones.json`)
        .then((phones)=>{
            const searchedPhones = this._filter(phones, text)
            // const sortedPhones = this._sort(searchedPhones, orderBy);
            return this._sort(searchedPhones,orderBy);
        })
    }
    getOneById(phoneId) {
        return this._sendRequest( `/phones/${phoneId}.json`)
        
    }

    _sendRequest(url, {method = 'GET'} = {}) {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: [['JWT', 'asd1241easdasd124124asd12412412asd12412']]
        }).then((res) => res.json())
    }

    _filter(phones,text){
        if(!text){
            return [...phones]
        }
        return [...phones].filter((phone)=>phone.name.toLowerCase().includes(text.toLowerCase()))
    }
    _sort(phones,orderBy){
        const p = [...phones]
        if(!orderBy){
            return p
        }
        p.sort((p1, p2) => { 
            if (p1[orderBy] > p2[orderBy]) {
                return 1;
            }
            if (p1[orderBy] < p2[orderBy]) {
                return -1
            }
            return 0;
        })

        return p;
    }
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneDetailsComponent", function() { return PhoneDetailsComponent; });
/* harmony import */ var _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

//PhoneDetailsComponent наследует от BaseComponent
class PhoneDetailsComponent extends _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]{

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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class CartComponent extends _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]{

    constructor({element}) {
        super({element});
        //будут храниться данные - имя телефона(id), его кол-во. для этого подойдет объект
        this._phones = {};
        this._render();
        this._element.addEventListener('click', (e)=>{
            const button = e.target.closest('.remove')
            if(!button){
                return;
            }
            const {phoneId} = button.dataset;
            this._phones[phoneId] -= 1;
            if(this._phones[phoneId] === 0){
                delete this._phones[phoneId]
            }
            this._render();
        })
    }

    add(phoneId){
        // если такого ключа нет, то запиши мне его
        if (!this._phones[phoneId]) {
            this._phones[phoneId] = 0;
        }
        this._phones[phoneId] += 1;
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <p>Shopping Cart</p>
        <ul>
        ${Object.entries(this._phones).map(([phoneId,count]) => {
            return `<li>${phoneId} - ${count}</li>
            <button class="remove" data-phone-id=${phoneId}>x</button>
            `
        }).join('')}  
        </ul>
        `
    }
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
//class-work added Filter


class FilterComponent extends _shared_componets_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]{
    constructor ({element}){
        super({element});
        this._render();
        this.on('input','.search', ({delegateTarget: {value}})=>{
            // console.log(e.delegateTarget.value);
            this.emitEvent('search', value)
        })
        this.on('change', '.sort', ({delegateTarget: {value}}) => {
            this.emitEvent('change-order', value)
        });
       
    }

    _render() {
        this._element.innerHTML = `
                <p>
                    Search:
                    <input  class="search">
                </p>

                <p>
                    Sort by:
                    <select>
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </p>

        `
    }
}

/***/ })
/******/ ]);