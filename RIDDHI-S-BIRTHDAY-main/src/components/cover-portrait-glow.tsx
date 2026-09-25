import React from 'react';
import BorderGlow from './BorderGlow';

export function CoverPortraitGlow() {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="200 85 85"
      backgroundColor="rgba(10, 17, 40, 0.4)"
      borderRadius={30}
      glowRadius={40}
      glowIntensity={2.5}
      coneSpread={25}
      animated={true}
      colors={['#bae6fd', '#f472b6', '#c084fc']}
      className="portrait-frame !p-2"
    >
      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-800 flex items-center justify-center">
        <span className="text-slate-600 font-bold text-3xl opacity-30 text-center">TEST CASE COVER</span>
        <div className="portrait-badge">
          <span>🌸</span> RIDDHI • 19 <span>✨</span>
        </div>
      </div>
    </BorderGlow>
  );
}