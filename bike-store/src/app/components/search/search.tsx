"use client";

import { useEffect, useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");

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
