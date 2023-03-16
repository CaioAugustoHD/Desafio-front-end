import check from "../../../assets/check.svg"
import x from "../../../assets/x.svg"

export function Saldo() {
    const sectionStyle = {
        height: "125px",
        borderTop: "1px solid #EBEBEB"
    }

    const buttonsContainerStyle = {
        height: "85px",
        borderTop: "1px solid #EBEBEB"
    }

    const imgStyle = {
        height: "20px",
        marginRight: "7px"
    }

    const buttonCancelar = {
        color: "#696969",
         border: "1px solid #C6C6C6"

    }

    return (
        <section style={sectionStyle} className="bg-white position-absolute bottom-0 w-100">
            <div className="d-flex justify-content-between px-5 pb-2 fs-5">
                <span className="fw-bold" style={{color: "#696969"}}>Total</span>
                <span className="fw-bold" style={{color: "#2c9a44"}}>R$ 40,00</span>
            </div>
            <div className="d-flex justify-content-evenly align-items-center" style={buttonsContainerStyle}>
                <button className="btn btn-primary text-white col-4 py-3">
                    <img style={imgStyle} src={check} />
                    Finalizar
                </button>
                <button style={buttonCancelar} className="btn btn-outline-primary col-4 py-3">
                    <img style={imgStyle} src={x} />
                    Cancelar
                </button>
            </div>
        </section>
    )
}