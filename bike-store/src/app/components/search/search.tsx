"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SubmitBtn from "../buttons/submit-btn/submit-btn";

export default function Search() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function OnSearch(event: React.FormEvent) {
    event.preventDefault();
    if (value) {
      router.push(`?name=${value}`);
    }
  }

  return (
    <>
      <form className="search-form-input" onSubmit={OnSearch}>
        <div className="relative">
          <input
            className="search-input"
            type="text"
            value={value}
            placeholder="Pesquise aqui"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <CiSearch
            size={24}
            color="#61747f"
            className="absolute top-2 right-4 hidden min-[450px]:block"
            cursor={"pointer"}
            onClick={OnSearch}
          />
        </div>
        <SubmitBtn />
      </form>
    </>
  );
}
