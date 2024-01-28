function Card({config}) {
    return (
    	<div className="col-md-6">
            <div className={`h-100 p-5 rounded-3 ${config.mode}`}>
                <h2> {config.title} </h2>
                <p>
                    {config.description}
                </p>
                <button className={`btn ${config.colorButton}`} type="button">
                    Example button
                </button>
            </div>
        </div>
    )
}


export default Card;