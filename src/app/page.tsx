import { Hero } from "@/components/sections/Hero";
import { CategorySection } from "@/components/sections/CategorySection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { products } from "@/data/products";

export default function Home() {
  const jewelryProducts = products.filter((p) => p.category === "jewelry");
  const fashionProducts = products.filter((p) => p.category === "fashion");
  const weaponProducts = products.filter((p) => p.category === "weapons");
  const podProducts = products.filter((p) => p.category === "pod");
  const autoProducts = products.filter((p) => p.category === "automotive");

  return (
    <div className="w-full">
      <Hero />
      
      
      <CategorySection 
        title="Jewelry Accessories" 
        description="Remotely manage and organize your customized offerings no need to rely on lengthy deployment cycles or constant code changes."
        products={jewelryProducts} 
        bg="gray" 
      />

      
      <CategorySection 
        title="Fashion & Apparel Products Customization" 
        description="Easily manage and update your fashion products with live customization customers can change colors, add prints, and personalize text in seconds."
        products={fashionProducts} 
        bg="white" 
        className="!pt-4 md:!pt-8"
      />

      
      <CategorySection 
        title="Weapons Product" 
        description="To keep your menu fresh, just add new cake designs, seasonal treats, or distinctive packaging to your custom bakery products."
        products={weaponProducts} 
        bg="gray" 
        className="!pt-4 md:!pt-8"
      />

      
      <CategorySection 
        title="Unique Print-on-Demand Collections" 
        description="Freshen your catalogue with seasonal designs, attractive styles, and unique goods. KR Customizer allows you to create personalized items that keep consumers returning."
        products={podProducts} 
        bg="white" 
        className="!pt-4 md:!pt-8"
      />

      
      <CategorySection 
        title="Automotive" 
        description="To keep your menu fresh, just add new cake designs, seasonal treats, or distinctive packaging to your custom bakery products."
        products={autoProducts} 
        bg="gray" 
        className="!pt-4 md:!pt-8"
      />

      
      <CtaBanner />
    </div>
  );
}
