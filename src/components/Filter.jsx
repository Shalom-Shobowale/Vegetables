"use client";

import { useState } from "react";
import product from '../app/product.json';
import Card from "./Card";

export default function ProductFilter() {
    const [open, setOpen] = useState(1);
    const [items, setItems] = useState(product);

    const categories = [
        { id: 1, label: "All", value: null },
        { id: 2, label: "Vegetables", value: "vegetable" },
        { id: 3, label: "Fruits", value: "fruit" },
        { id: 4, label: "Juice", value: "drink" },
        { id: 5, label: "Dried", value: "dries" },
    ];

    const handleClick = (id, category) => {
        setItems(category ? product.filter(item => item.category === category) : product);
        console.log("Selected category:", category);
        setOpen(id);
    };

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mt-12">
                {categories.map(({ id, label, value }) => (
                    <button
                        key={id}
                        onClick={() => handleClick(id, value)}
                        className={`px-5 py-1 rounded-md transition ${
                            open === id ? "bg-background text-white" : "text-background bg-transparent hover:bg-gray-200"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="my-14">
                <Card limit={24} items={items} />
            </div>
        </div>
    );
}
