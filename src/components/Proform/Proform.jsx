import { useState } from 'react';
import { useRef } from 'react';
import { extras, plans, data } from './data.jsx';

function Proform() {

    const planRef = useRef(null);
    let [typeValue, setTypeValue] = useState(-1);
    let [extraValue, setExtraValue] = useState({});
    let [planValue, setPlanValue] = useState({});
    let typesOptions = data.map(datum => <option value={datum.id} key={datum.id}>{datum.title}</option>);
    let planOptions = plans.map((planum, idx) => <option value={idx} key={planum.name}>{planum.name}</option>);
    const selectedType = (event) => {
	    let value = event.target.value;
	    let type = data[value];
	    let extra = extras[value];
	    // Colección de <options> 
        let optionsSelectHTML = planRef.current.options;

        // Arreglo con las opciones del tipo
        let optionsType = type.options// Arreglo de <options>
        let optionsSelectArray = Array.from(optionsSelectHTML).slice(1)
        // Itere sobre el arreglo de <option> para cambiar el estilo para mostrar según optionsType
        optionsSelectArray.forEach( (option, i) => {
            optionsType[i] ? option.style.display = 'block' : option.style.display = 'none'
        })

        // Seleccione la opción en el índice 0
        planRef.current.options[0].selected = true
        
        // Lleve el enfoque al elemento
        planRef.current.focus();

        setTypeValue(value);
        setExtraValue(extra);
	}
    const selectedPlan = (event) => {
	    let value = event.target.value
	    let plan = plans[value]
	    setPlanValue(plan);
	}
    return (
        <section>
            <div className="row">
                <div className="col-md-7 col-lg-7 col-xl-5 offset-xl-1 mb-4 mb-md-0">
                    <h5 className="mb-3">Seleccione el tipo y plan de pago</h5>
                    <div>
                        <label className="form-label select-label">Tipo</label>
                        <select 
                        className="form-select form-select-sm" 
                        aria-label=".form-select-sm example" 
                        defaultValue={-1} onChange={selectedType}>
                            <option value={-1} disabled>Seleccione un tipo de plan</option>
                            {typesOptions}
                        </select>
                    </div>
                    <div className="mt-3">
                        <label className="form-label select-label">Plan de pago</label>
                        <select ref={planRef}
                        className="form-select form-select-sm" 
                        aria-label=".form-select-sm example"
                        defaultValue={-1} onChange={selectedPlan}>
                            <option value={-1} disabled>Seleccione un plan de pago</option>
                            {planOptions}
                        </select>
                    </div>
                    <hr />
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row mt-1">
                                <h6>{ typeValue!=-1 ? data[typeValue].title : '' }</h6>
                            </div>
                            <div className="d-flex flex-row align-items-center text-primary">
                                <h6 className="fw-bold text-success ms-1">$ {extraValue.value} por {planValue.value} mes(es)</h6>
                            </div>
                        </div>
                        <p>
                            { extraValue != {} ? extraValue.text : '--'}
                        </p>
                        <hr />
                    </div>
                </div>
                <div className="col-md-5 col-lg-4 offset-lg-1 col-xl-4 ">
                    <div className="p-3" style={{ backgroundColor: 'rgb(238, 238, 238)' }}><span className="fw-bold">Proforma</span>
                        <div className="d-flex justify-content-between mt-2"><span>Tipo { typeValue!=-1 ? data[typeValue].title : '' } </span> <span>$ {extraValue.value ? extraValue.value : '0.00'}</span></div>
                        <div className="d-flex justify-content-between mt-2"><span>Tiempo (mes)</span> <span>{planValue.value}</span></div>
                        <hr />
                        <div className="d-flex justify-content-between mt-2"><span className="lh-sm">Subtotal</span><span>$ {extraValue.value && planValue.value ? extraValue.value * planValue.value : '0.00'}</span></div>
                        <div className="d-flex justify-content-between mt-2"><span className="lh-sm">IVA 12%</span><span>$ {extraValue.value && planValue.value ? ((extraValue.value * planValue.value)* 0.12).toFixed(2) : '0.00'}</span></div>
                        <hr />
                        <div className="d-flex justify-content-between mt-2"><span>Total </span> <span className="text-success">$ {extraValue.value && planValue.value ? ((extraValue.value * planValue.value) * 1.12).toFixed(2) : '0.00'}</span></div>
                        <div className="d-flex justify-content-center mt-2">
                            <div className="btn btn-success btn-lg btn-block mt-2">Proceder</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Proform