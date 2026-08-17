import React from 'react';
import PixelTransition from './PixelTransition';

export function MemoryChaptersPixels() {
  const photoContent = (
    <div className="relative w-full h-full group overflow-hidden rounded-[24px]">
      <img
        src="/assets/sarvagya_riddhi_couple.jpg"
        alt="Sarvagya & Riddhi Memory"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
    </div>
  );

  const messageContent = (
    <div
      className="w-full h-full flex flex-col justify-center items-center p-8 md:p-10 text-center rounded-[24px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A1128 0%, #101935 100%)',
        border: '1.5px solid rgba(186, 230, 253, 0.6)',
        boxShadow: 'inset 0 0 40px rgba(186, 230, 253, 0.15)'
      }}
    >
      <span className="text-4xl mb-4">🤍</span>
      <span
        className="text-xs uppercase tracking-widest font-bold mb-2"
        style={{ color: '#BAE6FD' }}
      >
        Sarvagya & Riddhi &bull; Our Story
      </span>
      <h4 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Where Magic Meets Forever 🌸
      </h4>
      <p
        className="text-lg leading-relaxed max-w-sm mb-6 font-medium italic"
        style={{ color: '#E2E8F0', fontFamily: 'var(--font-body)' }}
      >
        Sometimes I ask &quot;kya hua&quot; just to hear &quot;tumse pyaar&quot;, but all I get is &quot;kuch nhi&quot;
      </p>
      <div
        className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider"
        style={{
          backgroundColor: 'rgba(186, 230, 253, 0.12)',
          color: '#BAE6FD',
          border: '1px solid rgba(186, 230, 253, 0.4)'
        }}
      >
        Hover or tap to reveal photo 📸✨
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <span className="lily-icon-header">🤍</span>
        <h3 className="us-subheading text-center !mb-2" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>
          Our Memory Story
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
          Hover or tap the message card to reveal our special memory 🌸✨
        </p>
      </div>

      <div className="flex justify-center items-center">
        <PixelTransition
          firstContent={messageContent}
          secondContent={photoContent}
          gridSize={14}
          pixelColor="#bae6fd"
          animationStepDuration={0.45}
          once={false}
          aspectRatio="175%"
          className="w-full max-w-[440px]"
        />
      </div>
    </div>
  );
}

