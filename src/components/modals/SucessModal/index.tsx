import successImg from '../../../assets/successImg.png'

export function SuccessModal() {

    const modalStyle = {
        boxShadow: "box-shadow: 0 2.9px 8px 0 #00000014",
        borderRadius: "6px",
        maxWidth: "450px"
    }

    return (
        <div className="modal fade" id="successModal" tabIndex={-1} aria-labelledby="successModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content px-4 px-sm-5 py-3 border border-white m-auto" style={modalStyle}>
                    <button type="button" className="btn-close position-absolute end-0 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body text-center mt-2">
                        <img className='img-fluid w-75 m-auto' src={successImg} />
                        <p className='fs-3 mb-0 fw-semibold' style={{color: "#0CAB2F"}}>Pedido Realizado Com Sucesso</p>
                    </div>
                    <div className="">
                        <button type="button" className="btn btn-success w-100 py-3 border-0" style={{backgroundColor: "#0CAB2F"}} data-bs-dismiss="modal">Continuar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}