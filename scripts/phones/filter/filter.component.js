//class-work added Filter
import {BaseComponent} from "../../shared/componets/base.component.js";

export class FilterComponent extends BaseComponent{
    constructor ({element}){
        super({element});
        this._render();
       
    }

    _render() {
        this._element.innerHTML = `
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

        `
    }
}