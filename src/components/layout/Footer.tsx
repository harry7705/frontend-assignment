"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { footerLinks } from "@/data/footerLinks";
import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1d9bf0">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const FacebookIcon = () => (
  <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" width="28" height="28" alt="Facebook" />
);

const LinkedinIcon = () => (
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" width="28" height="28" alt="LinkedIn" />
);

function FooterLink({ href, children, underlined = false }: { href: string; children: React.ReactNode; underlined?: boolean }) {
  return (
    <Link href={href} className="relative inline-block text-[#4b5563] text-[13.5px] font-normal group">
      {children}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#4b5563] ${underlined ? 'w-full' : 'w-0 group-hover:w-full'}`}
      />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-[#f0f2f4]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-16"
        >
          <div className="col-span-2 lg:col-span-1 lg:pr-8 text-center lg:text-left">
            <Link href="/" className="block mb-5" style={{fontFamily: '"Bebas Neue", sans-serif', fontSize: '38px', letterSpacing: '1px', color: '#111827', fontWeight: 400, lineHeight: 1, textTransform: 'uppercase', WebkitTextStroke: '0.5px #111827'}}>
              CUSTOMIZER
            </Link>
            <p className="text-[#4b5563] text-[13.5px] max-w-[220px] leading-relaxed font-normal mx-auto lg:mx-0">
              Get tips, new features &amp; exclusive deals
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-5 text-[14px]">Company</h4>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-5 text-[14px]">Customizer</h4>
            <ul className="space-y-3.5">
              {footerLinks.customizer.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-5 text-[14px]">Contact Us</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:1-800-259-3265" className="relative inline-flex items-center gap-3.5 text-[#111827] text-[13.5px] font-normal group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#111827" className="flex-shrink-0">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="relative">
                  1-800-259-3265
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-[#111827] group-hover:w-full" />
                </span>
              </a>
              <a href="mailto:support@kds.com" className="relative inline-flex items-center gap-3.5 text-[#111827] text-[13.5px] font-normal group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#111827" className="flex-shrink-0">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="relative">
                  support@kds.com
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-[#111827] group-hover:w-full" />
                </span>
              </a>
            </div>

            <h4 className="font-bold text-[#111827] mb-4 text-[14px]">Social</h4>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/krcustomizer_/" target="_blank" rel="noopener noreferrer" className="text-[#ec4899] hover:opacity-75 transition-opacity">
                <InstagramIcon />
              </a>
              <a href="https://x.com/KRCustomizer" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:opacity-75 transition-opacity">
                <TwitterIcon />
              </a>
              <a href="https://www.facebook.com/krcustomizer/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:opacity-75 transition-opacity">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/company/krcustomizer/" target="_blank" rel="noopener noreferrer" className="text-[#0ea5e9] hover:opacity-75 transition-opacity">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="pt-6 border-t border-[#e5e7eb] flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="#" className="text-[#4b5563] text-[12.5px] font-normal relative inline-block group">
            Privacy policy
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-[#4b5563] transition-all duration-300 group-hover:w-full" />
          </Link>
          <p className="text-[#4b5563] text-[12.5px] font-normal">
            © 2025 Customizer. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
