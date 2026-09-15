import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/923158212978?text=Hello%20Sasta%20Darzi!%20I%20want%20to%20inquire%20about%20stitching/alteration%20services."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110 border-2 border-white/20"
      title="Chat on WhatsApp (03158212978)"
    >
      <MessageSquare className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat on WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 bg-gold-400 text-obsidian-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border border-black animate-pulse">
        1
      </span>
    </a>
  );
}
