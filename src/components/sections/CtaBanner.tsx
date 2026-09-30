"use client";

import * as React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="bg-[#f8f9fb] pt-8 pb-16 md:pt-12 md:pb-24">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[16px] border-[1px] border-[#a074f5] bg-gradient-to-r from-[#f5edff] via-[#ebdfff] to-[#e2cfff] py-10 px-8 flex flex-col items-center text-center shadow-sm w-full max-w-[1050px] mx-auto"
        >
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#1f2937] mb-2 tracking-normal">
            Get started for free
          </h2>
          <p className="text-[#4b5563] mb-6 mx-auto text-[15.5px] font-medium leading-relaxed">
            Play around with Customizer and set up your docs for free. Add your team and pay when you&apos;re ready.
          </p>
          <Button variant="primary" className="px-10 py-[14px] bg-[#3b59df] text-white hover:bg-[#324ec2] text-[16px] rounded-[10px] font-medium transition-colors shadow-sm tracking-wide">
            Request a Demo
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
