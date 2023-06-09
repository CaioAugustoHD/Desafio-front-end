import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";

import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import { ProductModal } from "../modals/ProductModal";
import { ModalDataContext } from "../contexts/ModalDataContext";
import axios from "axios";

interface ProductsCardProps {
  productsCategory: number;
  searchProducts: string;
}

interface ApiResponseType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
}

const apiUrl = "http://localhost:3000/";

export function ProductsCard(props: ProductsCardProps) {
  const [apiResponse, setApiResponse] = useState<ApiResponseType[]>([]);

  async function apiFetch() {
    try {
      const response = axios.get(apiUrl + "products");
      const data = (await response).data;
      setApiResponse(data);
    } catch {
      console.log("Falha no fetch");
    }
  }

  const { modalData } = useContext(ModalDataContext);

  const [matchesMD, setMatchesMD] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const [matchesSM, setMatchesSM] = useState(
    window.matchMedia("(min-width: 576px)").matches
  );

  const selectedCategory =
    props.productsCategory == 0
      ? apiResponse
      : apiResponse.filter(
          (product) => product.category_id == props.productsCategory
        );

  const filteredProducts = selectedCategory.filter((product) =>
    product.name.toLowerCase().includes(props.searchProducts.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);

  const itensPerPage = matchesMD ? 5 : matchesSM ? 4 : 2;
  const pages = Math.ceil(filteredProducts.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = filteredProducts.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [pages]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatchesMD(e.matches));
  }, []);

  useEffect(() => {
    window
      .matchMedia("(min-width: 576px)")
      .addEventListener("change", (e) => setMatchesSM(e.matches));
  }, []);

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <>
      <section className="col-11 m-auto mt-4 row justify-content-around justify-content-sm-between">
        {currentItens.map((product) => {
          return <Card key={product.id} product={product} />;
        })}

        <div aria-label="Page navigation example">
          <div
            className="position-absolute bottom-0 end-0 mb-3"
            style={{ marginRight: "7em" }}
          >
            <span style={{ color: "#696969" }}>
              Página{" "}
              <span
                className="bg-white px-4 py-1 rounded-1"
                style={{ color: "#9C9C9C", border: "1px solid #D1D1D1" }}
              >
                {currentPage + 1}
              </span>{" "}
              <span style={{ color: "#9C9C9C" }}>de {pages}</span>{" "}
            </span>
          </div>

          <ul className="pagination position-absolute bottom-0 end-0 mx-4 mb-3">
            <li className="page-item active ms-5">
              <button
                className="page-link pt-0 pb-1 border-0"
                aria-label="Previous"
                disabled={currentPage == 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <img src={left} />
              </button>
            </li>
            <li className="page-item active">
              <button
                className="page-link pt-0 pb-1 border-0"
                aria-label="Next"
                disabled={currentPage + 1 == pages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <img src={right} />
              </button>
            </li>
          </ul>
        </div>
      </section>
      <ProductModal product={modalData} />
    </>
  );
}
