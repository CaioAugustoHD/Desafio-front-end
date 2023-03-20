import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import successImg from "../../../assets/successImg.png";

interface submitDataType {
  bairroInput: string;
  cepInput: number;
  cidadeInput: string;
  complementoInput: string;
  estadoInput: string;
  numeroInput: number;
  refInput: string;
}

export function FormModal() {
  const {
    setValue,
    handleSubmit,
    register,
    setFocus,
    formState: { errors }
  } = useForm();

  const closeModalButtomRef = useRef<HTMLButtonElement>(null);

  function clearForm() {
    setValue("bairroInput", "");
    setValue("cidadeInput", "");
    setValue("estadoInput", "");
    setValue("cepInput", "");
    setValue("numeroInput", "");
    setValue("complementoInput", "");
    setValue("refInput", "");
  }

  function maskNumber(value: string) {
    return value.replace(/\D/g, "");
  }

  async function ApiFetch(cep: string) {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${Number(cep)}/json/`
      );
      const data = response.data;
      if (data.erro) {
        alert("CEP não encontrado");
        setFocus("cepInput");
      } else {
        setValue("bairroInput", data.bairro);
        setValue("cidadeInput", data.localidade);
        setValue("estadoInput", data.uf);
        setFocus("bairroInput");
      }
    } catch {
      console.log("CEP não encontrado");
    }
  }

  async function onSubmit(submitData: submitDataType) {
    console.log("ENVIADO p validar", submitData);
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${Number(submitData.cepInput)}/json/`
      );
      const data = response.data;
      if (data.erro) {
        alert("CEP não encontrado");
        setFocus("cepInput");
      } else {
        console.log("O SUBMIT PARA A API");
        closeModalButtomRef.current?.click();
        clearForm();
      }
    } catch {
      alert("CEP não encontrado");
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="formModal"
        tabIndex="-1"
        aria-labelledby="formModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content border border-white rounded"
            style={{ boxShadow: "0 3px 8px 0 #00000014" }}
          >
            <button
              type="button"
              className="btn-close position-absolute end-0 me-3 mt-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body mt-5 px-sm-5">
              <form
                className="row formModalStyle"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-3">
                  <label htmlFor="entregaInput" className="form-label">
                    Forma de Entrega
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="entregaInput"
                  >
                    <option selected>Delivery</option>
                  </select>
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="cepInput" className="form-label">
                    CEP
                  </label>
                  <input
                    {...register("cepInput", { required: true, minLength: 8 })}
                    type="text"
                    maxLength={8}
                    className="form-control"
                    id="cepInput"
                    placeholder="CEP"
                    onChange={(e) =>
                      setValue("cepInput", maskNumber(e.target.value))
                    }
                    onInput={(e) =>
                      (e.target as HTMLInputElement).value.length == 8
                        ? ApiFetch((e.target as HTMLInputElement).value)
                        : null
                    }
                  />
                </div>
                <div className="mb-3 col-8">
                  <label htmlFor="bairroInput" className="form-label">
                    Bairro
                  </label>
                  <input
                    {...register("bairroInput")}
                    type="text"
                    className="form-control"
                    id="bairroInput"
                    placeholder="Digite seu bairro"
                  />
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="numberInput" className="form-label">
                    Número
                  </label>
                  <input
                    {...register("numeroInput")}
                    type="text"
                    className="form-control"
                    id="numberInput"
                    placeholder="Número"
                  />
                </div>
                <div className="mb-3 col-8">
                  <label htmlFor="cidadeInput" className="form-label">
                    Cidade
                  </label>
                  <input
                    {...register("cidadeInput")}
                    type="text"
                    className="form-control"
                    id="cidadeInput"
                    placeholder="Cidade"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="estadoInput" className="form-label">
                    Estado
                  </label>
                  <input
                    {...register("estadoInput")}
                    type="text"
                    className="form-control"
                    id="estadoInput"
                    placeholder="Estado"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="complementoInput" className="form-label">
                    Complemento
                  </label>
                  <input
                    {...register("complementoInput")}
                    type="text"
                    className="form-control"
                    id="complementoInput"
                    placeholder="Complemento"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="refInput" className="form-label">
                    Referência
                  </label>
                  <input
                    {...register("refInput")}
                    type="text"
                    className="form-control"
                    id="refInput"
                    placeholder="Referência"
                  />
                </div>
                <div className="modal-footer border-0 mx-0 mt-3 pt-0 pb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btnFormModal w-100 text-white p-3 fs-5 my-0"
                    style={{ border: "1px solid #AFAFAF" }}
                  >
                    Continuar
                  </button>
                </div>
              </form>

              {/* BOTÃO FICTÍCIO PARA FECHAR MODAL */}
              <button
                ref={closeModalButtomRef}
                className="d-none"
                data-bs-toggle="modal"
                data-bs-target="#successModal"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="successModal"
        tabIndex={-1}
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content px-4 px-sm-5 py-3 border border-white m-auto"
            style={{
              boxShadow: "box-shadow: 0 2.9px 8px 0 #00000014",
              borderRadius: "6px",
              maxWidth: "450px"
            }}
          >
            <button
              type="button"
              className="btn-close position-absolute end-0 me-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body text-center mt-2">
              <img className="img-fluid w-75 m-auto" src={successImg} />
              <p className="fs-3 mb-0 fw-semibold" style={{ color: "#0CAB2F" }}>
                Pedido Realizado Com Sucesso
              </p>
            </div>
            <div className="">
              <button
                type="button"
                className="btn btn-success w-100 py-3 border-0"
                style={{ backgroundColor: "#0CAB2F" }}
                data-bs-dismiss="modal"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
