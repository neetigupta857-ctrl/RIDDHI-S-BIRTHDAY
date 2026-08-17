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
      <div className="relative w-full h-full rounded-[22px] overflow-hidden">
        <img
          src="/assets/riddhi_cover.jpg"
          alt="Riddhi 19th Birthday Cover"
          className="portrait-img"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.tried) {
              target.dataset.tried = 'true';
              target.src = '/riddhi_cover.jpg';
            }
          }}
        />
        <div className="portrait-badge">
          <span>🌸</span> RIDDHI • 19 <span>✨</span>
        </div>
      </div>
    </BorderGlow>
  );
}
