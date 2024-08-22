"use client";

import { fetchData } from "@/app/services/api";
import { useEffect, useState } from "react";

export default function Seatch() {
  const [value, setValue] = useState("Caloi S");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData(`/products?name=${value}`);
        setData(response);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
      }
    };
    fetchDataAsync();
  }, []);
  
  console.log(data)
  return (
    <>
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder="Pesquise aqui"
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      />
    </>
  );
}
