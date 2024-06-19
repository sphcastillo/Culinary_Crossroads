import peruvian from "@/images/banner/peruvianFood.png";
import afghan from "@/images/banner/afghanCuisine.jpg";
import georgian from "@/images/banner/georgianFood.jpeg";
import asian from "@/images/banner/asianCuisine.jpeg";
import Image from "next/image";

function Banner() {
  return (
    <div className="grid gap-4 md:ml-2">
      <div className="grid-cols-4">
        <div className="my-3 object-cover">
          <Image src={afghan} alt="Afghan Food" width={350} height={200} priority/>
        </div>
        <div className="my-3 object-cover">
          <Image src={peruvian} alt="Peruvian Food" width={350} height={200} priority/>
        </div>
        <div className="my-3 object-cover">
          <Image src={georgian} alt="Georgian Food" width={350} height={200} priority/>
        </div>
        <div className="my-3 object-cover">
          <Image src={asian} alt="Asian Food" width={350} height={200} priority/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
