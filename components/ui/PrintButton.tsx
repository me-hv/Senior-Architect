'use client';

import { Download } from 'lucide-react';

export function PrintButton() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <button 
      onClick={handlePrint}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium shadow-2xl hover:scale-105 hover:bg-zinc-800 transition-all active:scale-95 print-hide"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </button>
  );
}
