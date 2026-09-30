"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navLinks";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 h-[72px] flex items-center shadow-sm">
      <Container className="w-full">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="https://res.cloudinary.com/driwhaog/image/upload/v1790800468/ChatGPT_Image_Oct_1_2026_02_04_17_AM.png" 
                  alt="Logo" 
                  width={300} 
                  height={76} 
                  className="h-[76px] w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${link.name === 'Showcase' ? 'text-[#3b59df]' : 'text-[#111827]'} hover:text-[#3b59df] font-medium text-[15.5px] flex items-center gap-1 transition-colors group`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className={`w-4 h-4 ${link.name === 'Showcase' ? 'text-[#3b59df]' : 'text-[#111827]'} group-hover:text-[#3b59df] transition-colors`} />}
                </Link>
              ))}
            </nav>
          </div>

          
          <div className="hidden md:flex items-center gap-7 flex-shrink-0">
            <Link href="#" className="text-[#111827] hover:text-[#3b59df] font-medium text-[15.5px] transition-colors">
              Login
            </Link>
            <button className="bg-[#3b59df] text-white px-5 py-2 rounded-[6px] font-medium text-[15.5px] hover:bg-[#324ec2] transition-colors shadow-sm">
              Get a demo
            </button>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4b5563] hover:text-[#111827] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white z-50 flex flex-col px-6 pt-4 pb-8 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#111827] font-medium text-[16px] py-3 border-b border-gray-100 flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-[#888]" />}
              </Link>
            ))}
            <Link
              href="#"
              className="text-[#111827] font-medium text-[16px] py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <button className="mt-6 bg-[#3b59df] text-white px-6 py-2 rounded-[8px] font-medium text-[14px] hover:bg-[#324ec2] transition-colors self-start">
              Get a demo
            </button>
          </div>
        )}
      </Container>
    </header>
  );
}
