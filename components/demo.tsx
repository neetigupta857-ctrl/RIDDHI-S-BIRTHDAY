import { GlareCard } from "@/components/ui/glare-card";
import { Sparkles, Heart, Coffee, Flower2, Camera, Sun } from "lucide-react";

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-center justify-center p-6 text-center bg-slate-800">
        <Flower2 className="h-16 w-16 text-pink-300 mb-4 animate-pulse" />
        <p className="font-bold text-white text-xl">Test Case 1</p>
        <p className="font-normal text-sm text-neutral-300 mt-2">
          Generic test case UI replacing the old photo.
        </p>
      </GlareCard>

      <GlareCard className="flex flex-col items-center justify-center relative bg-slate-800">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <span className="text-slate-600 font-bold text-2xl opacity-50">TEST CASE 2</span>
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <span className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <Coffee className="w-4 h-4" /> Category 2
          </span>
          <p className="font-bold text-white text-lg">Test Case 2</p>
        </div>
      </GlareCard>

      <GlareCard className="flex flex-col items-start justify-end py-8 px-6 relative bg-slate-800">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <span className="text-slate-600 font-bold text-2xl opacity-50">TEST CASE 3</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
          <span className="flex items-center gap-2 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Category 3
          </span>
          <p className="font-bold text-white text-lg">Test Case 3</p>
          <p className="font-normal text-sm text-neutral-200 mt-2">
            Generic testcase content replacing photo.
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
      title: "Test Case 1",
      category: "Test Category",
      icon: <Heart className="w-5 h-5 text-slate-100 fill-white" />,
      description: "Generic test case description.",
    },
    {
      id: 2,
      title: "Test Case 2",
      category: "Test Category",
      icon: <Sparkles className="w-5 h-5 text-amber-300" />,
      description: "Generic test case description.",
    },
    {
      id: 3,
      title: "Test Case 3",
      category: "Test Category",
      icon: <Sun className="w-5 h-5 text-amber-300" />,
      description: "Generic test case description.",
    },
    {
      id: 4,
      title: "Test Case 4",
      category: "Test Category",
      icon: <Flower2 className="w-5 h-5 text-pink-300" />,
      description: "Generic test case description.",
    },
    {
      id: 5,
      title: "Test Case 5",
      category: "Test Category",
      icon: <Flower2 className="w-5 h-5 text-emerald-300" />,
      description: "Generic test case description.",
    },
    {
      id: 6,
      title: "Test Case 6",
      category: "Test Category",
      icon: <Coffee className="w-5 h-5 text-amber-300" />,
      description: "Generic test case description.",
    },
    {
      id: 7,
      title: "Test Case 7",
      category: "Test Category",
      icon: <Sparkles className="w-5 h-5 text-yellow-300" />,
      description: "Generic test case description.",
    },
    {
      id: 8,
      title: "Test Case 8",
      category: "Test Category",
      icon: <Sun className="w-5 h-5 text-orange-300" />,
      description: "Generic test case description.",
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">Test Cases</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mt-2">
          Test Case Gallery
        </h2>
        <p className="text-slate-400 mt-2 text-base">Hover over each card to experience the interactive 3D foil-glare effect!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {galleryItems.map((item) => (
          <GlareCard key={item.id} className="relative flex flex-col justify-end p-6 overflow-hidden bg-slate-800">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <span className="text-slate-600 font-bold text-3xl opacity-30">TEST CASE {item.id}</span>
            </div>
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