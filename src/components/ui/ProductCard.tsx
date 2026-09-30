"use client";

import Image from 'next/image';
import { Product } from '@/data/products';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col h-full"
    >
      
      <div className="relative aspect-[5/4] w-full bg-[#f1f2f3] border border-[#d0d4f0] rounded-t-[16px] flex items-center justify-center overflow-hidden p-8 md:p-10">
        <motion.div 
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </div>

      
      <div className="flex flex-col items-start flex-grow justify-between bg-white px-5 pt-5 pb-6 rounded-b-[16px]">
        <h3 className="text-[17px] md:text-[18px] font-semibold text-[#1f2937] mb-4">{product.name}</h3>
        <Button variant="pill">Customize It</Button>
      </div>
    </motion.div>
  );
}
