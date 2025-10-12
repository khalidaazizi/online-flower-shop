import React from "react";
import { useCompare } from "../../context/CompareContext";
import type { Product } from "../../context/CompareContext";

interface Attribute {
  key: string;
  label: string;
}

interface CompareTableProps {
  attrs?: Attribute[];
}

const defaultAttrs: Attribute[] = [
  { key: "price", label: "Price" },
  { key: "brand", label: "Brand" },
  { key: "description", label: "Description" },
  { key: "availability", label: "Availability" },
  { key: "tax_status", label: "Tax Status" },
];

const CompareTable: React.FC<CompareTableProps> = ({ attrs = defaultAttrs }) => {
  const { compareItems, removeFromCompare } = useCompare();

  const read = (item: Product, key: string): React.ReactNode => {
    if (!item) return null;
    switch (key) {
      case "price":
        return item.price ? `$${item.price}` : item.price_html || null;
      case "brand":
        return typeof item.brand === "object"
          ? item.brand?.name
          : item.brand || null;
      case "description":
        return item.description ? (
          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        ) : null;
      case "availability":
        return item.in_stock ? (
          <span className="text-green-600">In stock</span>
        ) : (
          <span className="text-red-500">Out of stock</span>
        );
      default:
        return (item as any)[key] ?? null;
    }
  };

  return (
    <div className="bg-white border rounded-md overflow-x-auto">
      <table className="min-w-full table-fixed">
        <thead>
          <tr>
            <th className="w-40"></th>
            {compareItems.map((p) => (
              <th key={p.id} className="py-4 px-6 text-left"></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* image row */}
          <tr>
            <td></td>
            {compareItems.map((p) => (
              <td key={p.id} className="py-6 px-6">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => removeFromCompare(p.id)}
                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2"
                    title="Remove"
                  >
                    ×
                  </button>
                  <img
                    src={p.image || p.images?.[0] || "https://via.placeholder.com/160"}
                    alt={p.title || p.name}
                    className="w-36 h-36 object-contain bg-white p-2 border"
                  />
                  <div className="mt-3 text-sm font-medium">
                    {p.title || p.name}
                  </div>
                  <div className="mt-2">
                    <button className="px-3 py-1 bg-emerald-700 text-white rounded text-sm">
                      Add to cart
                    </button>
                  </div>
                </div>
              </td>
            ))}
          </tr>

          {/* attribute rows */}
          {attrs.map((attr) => (
            <tr key={attr.key} className="border-t">
              <td className="py-4 px-6 text-sm text-gray-600 font-medium w-40">
                {attr.label}
              </td>
              {compareItems.map((p) => (
                <td
                  key={p.id + "-" + attr.key}
                  className="py-4 px-6 text-sm text-gray-700 align-top"
                >
                  {read(p, attr.key) ?? <span className="text-gray-300">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
