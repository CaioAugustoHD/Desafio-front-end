import { createContext, ReactNode, useState } from "react";

interface modalDataType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
}

interface ContextType {
  modalData: modalDataType;
  setModalData: React.Dispatch<React.SetStateAction<modalDataType>>;
}

const defaultValue = {
  modalData: {
    id: 1,
    name: "Example",
    description: "Example",
    price: 1,
    image: "Example",
    category_id: 1
  },
  setModalData: () => {}
};

export const ModalDataContext = createContext<ContextType>(defaultValue);

export function ModalDataProvider({ children }: { children: ReactNode }) {
  const [modalData, setModalData] = useState(defaultValue.modalData);

  return (
    <ModalDataContext.Provider value={{ modalData, setModalData }}>
      {children}
    </ModalDataContext.Provider>
  );
}
