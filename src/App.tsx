import ClickSpark from "@/components/ClickSpark";
import { RiddhiPhotoGallery } from "@/components/demo";

export default function App() {
  return (
    <ClickSpark
      sparkColor="#bae6fd"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <div className="w-full text-slate-100 flex flex-col items-center justify-start py-8 px-4">
        <RiddhiPhotoGallery />
      </div>
    </ClickSpark>
  );
}

