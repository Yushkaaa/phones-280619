//class-work added Filter
import {BaseComponent} from "../../shared/componets/base.component.js";

export class FilterComponent extends BaseComponent{
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