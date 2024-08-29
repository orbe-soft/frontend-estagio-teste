"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type OnBrandChange = (brand: string) => void;

interface BrandNavProps {
  onBrandChange: OnBrandChange;
}

export default function BrandNav({ onBrandChange }: BrandNavProps) {
  const brands = ["todas as marcas", "caloi", "krw"];

  const searchParams = useSearchParams();
  const selectedBrand = searchParams.get("brand") || "todas as marcas";

  return (
    <nav className="brand-nav">
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <Link
              className={selectedBrand === brand ? "active" : ""}
              href={{
                query: { brand: brand },
              }}
              onClick={() => onBrandChange(brand)}
            >
              {brand}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
