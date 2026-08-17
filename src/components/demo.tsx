import { GlareCard } from "@/components/ui/glare-card";
import { Sparkles, Heart, Coffee, Flower2, Camera, Sun } from "lucide-react";

import imgGoai from "../../assets/riddhi/Gemini_Generated_Image_goainogoainogoai.png";
import imgUsjl from "../../assets/riddhi/Gemini_Generated_Image_usjlbcusjlbcusjl.png";
import imgWhatsapp from "../../assets/riddhi/WhatsApp Image 2026-08-01 at 00.42.51.jpeg";
import img2mnf from "../../assets/riddhi/Gemini_Generated_Image_2mnfx32mnfx32mnf.png";
import img68xf from "../../assets/riddhi/Gemini_Generated_Image_68xfa868xfa868xf.png";
import imgEfkd from "../../assets/riddhi/Gemini_Generated_Image_efkdd3efkdd3efkd.png";
import imgJ7h2 from "../../assets/riddhi/Gemini_Generated_Image_j7h2nnj7h2nnj7h2.png";
import imgJl8f from "../../assets/riddhi/Gemini_Generated_Image_jl8fqpjl8fqpjl8f.png";
import imgNccg from "../../assets/riddhi/Gemini_Generated_Image_nccgylnccgylnccg.png";

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-center justify-center p-6 text-center">
        <Flower2 className="h-16 w-16 text-pink-300 mb-4 animate-pulse" />
        <p className="font-bold text-white text-xl">Grace & Elegance</p>
        <p className="font-normal text-sm text-neutral-300 mt-2">
          Pure white lily vibes celebrating Riddhi&apos;s 19th milestone!
        </p>
      </GlareCard>

      <GlareCard className="flex flex-col items-center justify-center relative">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src={imgGoai}
          alt="Cozy & Botanical Vibes"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <span className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <Coffee className="w-4 h-4" /> Cozy Passions
          </span>
          <p className="font-bold text-white text-lg">Cozy & Botanical Vibes</p>
        </div>
      </GlareCard>

      <GlareCard className="flex flex-col items-start justify-end py-8 px-6 relative">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src={imgUsjl}
          alt="Festive Night Sparkle"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
          <span className="flex items-center gap-2 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Magical Moments
          </span>
          <p className="font-bold text-white text-lg">Festive Night Sparkle</p>
          <p className="font-normal text-sm text-neutral-200 mt-2">
            Shining bright under evening fairy lights in traditional attire.
          </p>
        </div>
      </GlareCard>
    </div>
  );
}

export function RiddhiPhotoGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "19th Birthday Milestone",
      category: "Special",
      icon: <Heart className="w-5 h-5 text-slate-100 fill-white" />,
      image: imgUsjl,
      description: "Embodying beauty, elegance, and warmth at 19.",
      objectPosition: "object-center",
    },
    {
      id: 2,
      title: "Royal Heritage Grace",
      category: "Royal Heritage",
      icon: <Sparkles className="w-5 h-5 text-amber-300" />,
      image: imgWhatsapp,
      description: "Stunning in ornate traditional heritage attire.",
      objectPosition: "object-top",
    },
    {
      id: 3,
      title: "Golden Sunshine Smile",
      category: "Sunshine",
      icon: <Sun className="w-5 h-5 text-amber-300" />,
      image: img2mnf,
      description: "Radiant warmth and delicate charm.",
      objectPosition: "object-top",
    },
    {
      id: 4,
      title: "Pure Elegance",
      category: "Elegance",
      icon: <Flower2 className="w-5 h-5 text-pink-300" />,
      image: img68xf,
      description: "Poised and beautiful, blooming like a white lily.",
      objectPosition: "object-top",
    },
    {
      id: 5,
      title: "Serene Moments",
      category: "Nature",
      icon: <Flower2 className="w-5 h-5 text-emerald-300" />,
      image: imgEfkd,
      description: "Graceful and captivating in every frame.",
      objectPosition: "object-top",
    },
    {
      id: 6,
      title: "Cozy Passions",
      category: "Passions",
      icon: <Coffee className="w-5 h-5 text-amber-300" />,
      image: imgJ7h2,
      description: "Surrounded by warm aesthetics and gentle smiles.",
      objectPosition: "object-center",
    },
    {
      id: 7,
      title: "Festive Night Sparkle",
      category: "Celebration",
      icon: <Sparkles className="w-5 h-5 text-yellow-300" />,
      image: imgJl8f,
      description: "Shining bright with enchanting grace.",
      objectPosition: "object-top",
    },
    {
      id: 8,
      title: "Vibrant Joy & Laughter",
      category: "Memories",
      icon: <Sun className="w-5 h-5 text-orange-300" />,
      image: imgNccg,
      description: "Radiant laughter creating unforgettable memories.",
      objectPosition: "object-top",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">Treasured Memories</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mt-2">
          Riddhi&apos;s Photo Gallery & Memories
        </h2>
        <p className="text-slate-400 mt-2 text-base">Hover over each card to experience the interactive 3D foil-glare effect!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {galleryItems.map((item) => (
          <GlareCard key={item.id} className="relative flex flex-col justify-end p-6 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover ${item.objectPosition || 'object-top'} transition-transform duration-500 hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-700 text-slate-200 mb-2 backdrop-blur-sm">
                {item.icon}
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.description}</p>
            </div>
          </GlareCard>
        ))}
      </div>
    </section>
  );
}
