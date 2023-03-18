import { useState } from "react"
import "./style.css"

const cepInput = document.getElementById('cepInput') as HTMLInputElement
const bairroInput = document.getElementById('bairroInput') as HTMLInputElement
const numeroInput = document.getElementById('numeroInput') as HTMLInputElement
const cidadeInput = document.getElementById('cidadeInput') as HTMLInputElement
const estadoInput = document.getElementById('estadoInput') as HTMLInputElement
const complementoInput = document.getElementById('complementoInput') as HTMLInputElement
const refInput = document.getElementById('refInput') as HTMLInputElement

export function FormModal() {

    const [apiResponse, setApiResponse] = useState({})
    const [cep, setCEP] = useState("");

    function clearForm() {
        cepInput.value = ''
        bairroInput.value = ''
        numeroInput.value = ''
        cidadeInput.value = ''
        estadoInput.value = ''
        complementoInput.value = ''
        refInput.value = ''
    }

    function maskCEP(value: string) {
        return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
    }

    async function ApiFetch(cep: string) {
        console.log(cep)
    
        fetch(`https://viacep.com.br/ws/${Number(cep)}/json/`)
            .then(response => response.json())
            .then(data => {
                data.erro ? alert('CEP não encontrado') : console.log(data)
                setApiResponse(data)
            })

        .catch(() => alert('CEP não encontrado'))        
    }

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
                                <input 
                                    type="text"
                                    maxLength={9}
                                    className="form-control"
                                    id="cepInput"
                                    placeholder="CEP"
                                    value={cep}
                                    onChange={(e) => setCEP(maskCEP(e.target.value))}
                                    onInput={(e) => (e.target as HTMLInputElement).value.length == 8 ? ApiFetch((e.target as HTMLInputElement).value) : null}
                                />
                            </div>
                            <div className="mb-3 col-8">
                                <label htmlFor="bairroInput" className="form-label">Bairro</label>
                                <input type="text" className="form-control" id="bairroInput" placeholder="Digite seu bairro" />
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
                        <button onClick={clearForm} type="button" className="btn btn-primary btnFormModal w-100 text-white p-3 fs-5 my-0" data-bs-dismiss="modal">Continuar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}