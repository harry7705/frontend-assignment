"use client";

import * as React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="bg-white pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-14">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111827] leading-[1.1] mb-6 tracking-tight">
              Explore Your Style From Fashion to Functional Gear
            </h1>
            <p className="text-[18px] text-[#4b5563] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Personalize every detail. Our real-time 3D and 2D customizers let you build the exact product you want, exactly how you want it.
            </p>
            <Button variant="primary" className="text-[17px] px-10 py-4">
              Request a Demo
            </Button>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-xl relative -translate-y-[2%]"
          >
            <div className="relative aspect-square w-full h-full overflow-hidden flex items-center justify-center bg-white">
               <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  width="600"
                  height="600"
                  className="w-full h-full object-contain scale-[1.05] bg-white mix-blend-multiply"
                  style={{ clipPath: 'inset(0 2px 0 0)' }}
               >
                 <source src="https://res.cloudinary.com/dqjbzgksw/video/upload/v1758528440/WhatsApp_Video_2025-09-22_at_13.33.27_9406cb5a_piedma.mp4" type="video/webm" />
                 <source src="https://res.cloudinary.com/dqjbzgksw/video/upload/v1758528440/WhatsApp_Video_2025-09-22_at_13.33.27_9406cb5a_piedma.mp4" type="video/mp4" />
               </video>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
