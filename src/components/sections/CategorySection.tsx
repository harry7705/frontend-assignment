"use client";

import * as React from "react";
import { Product } from "@/data/products";
import { ProductCard } from "../ui/ProductCard";
import { Container } from "../layout/Container";
import { motion } from "framer-motion";

interface CategorySectionProps {
  title: string;
  description?: string;
  products: Product[];
  bg: "white" | "gray";
  className?: string;
}

export function CategorySection({ title, description, products, bg, className = "" }: CategorySectionProps) {
  if (products.length === 0) return null;

  const bgClass = bg === "gray" ? "bg-[#f8f9fb]" : "bg-white";

  return (
    <section className={`pt-10 pb-20 md:pt-16 md:pb-28 ${bgClass} overflow-hidden ${className}`}>
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-14"
        >
          {title && <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] tracking-tight mb-5">{title}</h2>}
          {description && (
            <p className="text-[#4b5563] max-w-[700px] mx-auto text-[16px] md:text-[18px] leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
