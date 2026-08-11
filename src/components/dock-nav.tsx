import React, { useState, useEffect } from 'react';
import {
  Home,
  Camera,
  Heart,
  Sparkles,
  Volume2,
  VolumeX,
  Gift,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

export function AppleStyleDockNav() {
  const [activePage, setActivePage] = useState('home');
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActivePage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (page: string) => {
    setActivePage(page);
    try {
      window.history.pushState(null, '', `#${page}`);
    } catch (e) {}

    // Update DOM page views
    const pageViews = document.querySelectorAll('.page-view');
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
      pageViews.forEach((pv) => pv.classList.remove('active'));
      targetPage.classList.add('active');
    }

    // Update HTML nav links active state
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach((link) => {
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAudio = () => {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      audioBtn.click();
      const video = document.getElementById('hero-bg-video') as HTMLVideoElement;
      if (video) {
        setIsMuted(video.muted);
      }
    }
  };

  const openSurpriseLetter = () => {
    const surpriseBtn = document.getElementById('open-surprise-btn');
    if (surpriseBtn) {
      surpriseBtn.click();
    }
  };

  const iconClass = "h-5 w-5 text-white filter drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]";

  const data = [
    {
      title: 'Home',
      icon: <Home className={iconClass} />,
      page: 'home',
      action: () => navigateTo('home'),
    },
    {
      title: 'Memories Gallery',
      icon: <Camera className={iconClass} />,
      page: 'gallery',
      action: () => navigateTo('gallery'),
    },
    {
      title: 'Us',
      icon: <Heart className={iconClass} />,
      page: 'us',
      action: () => navigateTo('us'),
    },
    {
      title: 'Birthday Cake',
      icon: <Gift className={iconClass} />,
      page: 'surprises',
      action: () => navigateTo('surprises'),
    },
    {
      title: 'Unveil Letter',
      icon: <Sparkles className={iconClass} />,
      action: openSurpriseLetter,
    },
    {
      title: isMuted ? 'Unmute Audio' : 'Mute Audio',
      icon: isMuted ? <VolumeX className={iconClass} /> : <Volume2 className={iconClass} />,
      action: toggleAudio,
    },
  ];

  return (
    <div className="flex items-center justify-center max-w-full px-1">
      <Dock 
        panelHeight={48} 
        magnification={60} 
        distance={120}
        className="items-center pb-0 h-12 bg-slate-900/95 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-xl rounded-full px-3 gap-2 sm:gap-3"
      >
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            onClick={item.action}
            className={`aspect-square rounded-full transition-all ${
              item.page && activePage === item.page
                ? 'bg-white/25 border border-white shadow-[0_0_15px_rgba(255,255,255,0.9)] text-white'
                : 'bg-slate-800/80 hover:bg-slate-700/80 border border-white/20 hover:border-white/70 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)]'
            }`}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
