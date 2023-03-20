import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Table } from "./Table";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category_id: number;
  };
}

export function ProductModal(props: ProductModalProps) {
  const { sumCart, format } = useContext(CartContext);

  return (
    <div
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div
          className="modal-content border border-white"
          style={{ boxShadow: "0 3px 8px rgba(0, 0, 0, .08)" }}
        >
          <div className="modal-body flex-column flex-lg-row row p-0 align-items-center">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 mt-2 me-4"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="col-lg-7 m-0 pe-lg-0">
              <img
                className="img-fluid rounded-top"
                src={props.product.image}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-5 pt-5 px-5">
              <div
                className="d-flex px-4 py-2 rounded"
                style={{ backgroundColor: "#EDEDED", fontSize: "13px" }}
              >
                <div
                  className="col-6 d-flex flex-column justify-content-between align-items-start fw-normal"
                  style={{ color: "#696969" }}
                >
                  <span className="fs-6 fw-bold" style={{ color: "#515151" }}>
                    {props.product.name}
                  </span>
                  <span>2 Sabores</span>
                  <span>Escolha 1 opção</span>
                </div>
                <div
                  className="col-6 d-flex flex-column justify-content-between align-items-end fw-bold"
                  style={{ color: "#696969" }}
                >
                  <span
                    className="py-1 px-3 rounded"
                    style={{ backgroundColor: "#D4D4D4" }}
                  >
                    Obrigatório
                  </span>
                  <span>{format(props.product.price)}</span>
                </div>
              </div>
              <Table product={props.product} />
              <section className="bg-white w-100">
                <div
                  className="d-flex justify-content-between px-3 py-3 fs-5"
                  style={{
                    borderTop: "1px solid #EBEBEB",
                    borderBottom: "1px solid #EBEBEB"
                  }}
                >
                  <span className="fw-bold" style={{ color: "#696969" }}>
                    Total
                  </span>
                  <span className="fw-bold" style={{ color: "#2c9a44" }}>
                    {format(sumCart())}
                  </span>
                </div>
                <div className="d-flex justify-content-evenly align-items-center py-4">
                  <button
                    className="btn btn-primary text-white col-10 py-3 border-0 rounded-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Adicionar
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
