"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function OnSearch(event: React.FormEvent) {
    event.preventDefault();
    router.push(`?name=${value}`);
  }

  return (
    <>
      <form className="search-form-input" onSubmit={OnSearch}>
        <input
          className="search-input"
          type="text"
          value={value}
          placeholder="Pesquise aqui"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </form>
    </>
  );
}
