import { Inter } from "next/font/google";
import Image from "next/image";
import one from '/public/1.jpg'
const inter = Inter({subsets:["latin"], weight:["500"]})

export default function Home() {
  return (
    <div>
      <h1 className={`${inter.className} bg-red-400 text-white`}>hello world</h1>
      <Image src={"https://images.pexels.com/photos/16628553/pexels-photo-16628553/free-photo-of-young-man-on-a-motorcycle-in-city.jpeg"} width={1260} height={750} alt="image"/>
      <Image src={one} alt="second"/>
    </div>
  );
}
