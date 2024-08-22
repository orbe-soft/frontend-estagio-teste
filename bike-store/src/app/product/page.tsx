"use client";

import { Suspense, useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { useSearchParams } from "next/navigation";

export default function Product() {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData(`/products/${searchParams.get("id")}`);
        setData(response);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
      }
    };
    fetchDataAsync();
  }, [searchParams]);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div>{JSON.stringify(data)}</div>
    </Suspense>
  );
}
