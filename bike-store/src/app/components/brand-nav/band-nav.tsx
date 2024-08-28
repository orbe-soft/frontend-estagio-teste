import Link from "next/link";

export default function BrandNav({ onBrandChange }: any) {
  const brands = ["todas as marcas", "caloi", "krw"];

  return (
    <nav className="brand-nav">
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <Link
              className="active"
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
