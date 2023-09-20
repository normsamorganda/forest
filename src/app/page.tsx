import Image from "next/image";
import Slider from "@/components/Slider";
import KYC from "@/components/Cards";
import Funeral from "@/components/Funeral";
export default function Home() {
  return (
    <main className="bg-gray-100">
      <Slider />
      <KYC />
      <Funeral />
    </main>
  );
}
