import HeroPage from "@/component/Home/HeroPage";
import PlanSection from "@/component/Home/PlanSection";
import WhyConnect from "@/component/Home/WhyConnect";
import Image from "next/image";
import YouthCallToAction from "./../component/Home/YouthCallToAction";
import MessageSection from "@/component/Home/MessageSection";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <WhyConnect />
      <PlanSection />
      <YouthCallToAction />
      <MessageSection />
    </div>
  );
}
