import "./style.css"

export function FormModal() {
    return (
        <div className="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="btn-close position-absolute end-0 me-3 mt-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body mt-5 px-sm-5">
                        <form className="row formModalStyle">
                            <div className="mb-3">
                                <label htmlFor="entregaInput" className="form-label">Forma de Entrega</label>
                                <select className="form-select" aria-label="Default select example" id="entregaInput">
                                    <option selected>Delivery</option>
                                </select>
                            </div>
                            <div className="mb-3 col-4">
                                <label htmlFor="cepInput" className="form-label">CEP</label>
                                <input type="text" className="form-control" id="cepInput" placeholder="CEP" />
                            </div>
                            <div className="mb-3 col-8">
                                <label htmlFor="bairroInput" className="form-label">Bairro</label>
                                <input type="text" className="form-control" id="bairroInput" placeholder="digite seu bairro" />
                            </div>                            
                            <div className="mb-3 col-4">
                                <label htmlFor="numberInput" className="form-label">Número</label>
                                <input type="text" className="form-control" id="numberInput" placeholder="Número" />
                            </div>
                            <div className="mb-3 col-8">
                                <label htmlFor="cidadeInput" className="form-label">Cidade</label>
                                <input type="text" className="form-control" id="cidadeInput" placeholder="Cidade" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="estadoInput" className="form-label">Estado</label>
                                <input type="text" className="form-control" id="estadoInput" placeholder="Estado" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="complementoInput" className="form-label">Complemento</label>
                                <input type="text" className="form-control" id="complementoInput" placeholder="Complemento" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="refInput" className="form-label">Referência</label>
                                <input type="text" className="form-control" id="refInput" placeholder="Referência" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer border-0 mx-sm-4 pt-0 pb-4">
                        <button type="button" className="btn btn-primary btnFormModal w-100 text-white p-3 fs-5 my-0" data-bs-dismiss="modal">Continuar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}