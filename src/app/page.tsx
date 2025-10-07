import Ask from "@/components/home/ask";
import Blogs from "@/components/home/blog";
import Feature from "@/components/home/feature";
import Footer from "@/components/home/footer";
import { Hero1 } from "@/components/home/hero";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <Hero1 />
      <Blogs />
      <Feature />
      <Testimonial />
      <Ask />
      <Footer />
    </>
  );
}
