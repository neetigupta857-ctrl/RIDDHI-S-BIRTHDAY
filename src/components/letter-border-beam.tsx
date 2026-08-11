import React from 'react';
import { BorderBeam } from '@/components/ui/border-beam-search';

export function LetterBorderBeam() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[64px] overflow-hidden z-20">
      <BorderBeam 
        size="line" 
        colorVariant="colorful" 
        duration={3.1} 
        borderRadius={64} 
      >
        <div className="w-full h-full pointer-events-none" />
      </BorderBeam>
    </div>
  );
}
