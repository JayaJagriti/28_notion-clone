import { Button } from "@/components/ui/button"
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/Footer";


const MarketingPage =() =>{
  return (
  <div className=" min-h-full flex flex-col">
    <div className="flex flex-col flex-1 items-center justify-center md:justify-start text-center gap-y-8 px-6 pb-10">
      <Heading />
      <Heroes />
    </div>
    
    
  </div>
  )
}

export default MarketingPage;
