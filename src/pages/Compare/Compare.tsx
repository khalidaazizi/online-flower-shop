import React from "react";
import { Link } from "react-router-dom";
import { useCompare } from "../../context/CompareContext";
import CompareTable from "../../components/CompareTable/CompareTable";

const Compare: React.FC = () => {
  const { compareItems, clearCompare } = useCompare();

  if (compareItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">
            No products to compare
          </h2>
          <p className="text-gray-600 mb-6">
            Go to shop and add products to compare list.
          </p>
          <Link
            to="/shop"
            className="inline-block px-4 py-2 bg-emerald-700 text-white rounded"
          >
            Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-600 py-3">
        <div className="container mx-auto px-4">
          <div className="text-white font-medium text-lg">Products Compare</div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <CompareTable />

        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            {compareItems.length} products in comparison
          </div>
          <div className="space-x-2">
            <button
              onClick={clearCompare}
              className="px-4 py-2 border rounded text-sm"
            >
              Clear
            </button>
            <Link
              to="/shop"
              className="px-4 py-2 bg-emerald-700 text-white rounded text-sm"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
