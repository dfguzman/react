import { extras, plans, data } from './data.jsx';

function Proform() {
    let typesOptions = data.map(datum => <option value={datum.id} key={datum.id}>{datum.title}</option>);
    let planOptions = plans.map(planum => <option value={planum.name} key={planum.name}>{planum.value}</option>);
    const selectedType = (event) => {
	    let value = event.target.value
	    let type = data[value]
	    let extra = extras[value]
	    alert( `${type.title} $${extra.value}` )
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
                        <select 
                        className="form-select form-select-sm" 
                        aria-label=".form-select-sm example"
                        defaultValue={-1}>
                            <option value={-1} disabled>Seleccione un plan de pago</option>
                            {planOptions}
                        </select>
                    </div>
                    <hr />
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row mt-1">
                                <h6>data.title</h6>
                            </div>
                            <div className="d-flex flex-row align-items-center text-primary">
                                <h6 className="fw-bold text-success ms-1">$ extras.value por plans.value mes(es)</h6>
                            </div>
                        </div>
                        <p>
                            extras.text
                        </p>
                        <hr />
                    </div>
                </div>
                <div className="col-md-5 col-lg-4 offset-lg-1 col-xl-4 ">
                    <div className="p-3" style={{ backgroundColor: 'rgb(238, 238, 238)' }}><span className="fw-bold">Proforma</span>
                        <div className="d-flex justify-content-between mt-2"><span>Tipo data.title </span> <span>$ extras.value</span></div>
                        <div className="d-flex justify-content-between mt-2"><span>Tiempo (mes)</span> <span>plans.value</span></div>
                        <hr />
                        <div className="d-flex justify-content-between mt-2"><span className="lh-sm">Subtotal</span><span>$ extras.value * plans.value</span></div>
                        <div className="d-flex justify-content-between mt-2"><span className="lh-sm">IVA 12%</span><span>$ (extras.value * plans.value) * 0.12 </span></div>
                        <hr />
                        <div className="d-flex justify-content-between mt-2"><span>Total </span> <span className="text-success">$ (extras.value * plans.value) * 1.12 </span></div>
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