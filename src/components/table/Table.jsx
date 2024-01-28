import Data from "./Data";

function Table() {
    let data = [
        {
            "id": 0,
            "title": "Inicial",
            "options": [1, 1, 1]
        },
        {
            "id": 1,
            "title": "Intermedio",
            "options": [0, 1, 1]
        },
        {
            "id": 2,
            "title": "Avanzado",
            "options": [1, 1, 1]
        },
        {
            "id": 3,
            "title": "Maestro",
            "options": [0, 1, 1]
        },
        {
            "id": 4,
            "title": "Líder",
            "options": [0, 1, 1]
        },
        {
            "id": 5,
            "title": "Gerencial",
            "options": [0, 0, 1]
        }
    ];
    let tds = data.map( item => <Data data={item} key={item.id} />)

    return (
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="row" className="text-start" style={{ width: "34%" }} />
                <th scope="row" className="text-start" style={{ width: "22%" }}>Mensual</th>
                <th scope="row" className="text-start" style={{ width: "22%" }}>Semestral</th>
                <th scope="row" className="text-start" style={{ width: "22%" }}>Anual</th>
              </tr>
            </thead>
            <tbody>
              {tds}
            </tbody>
          </table>
        </div>
    )
}

export default Table;