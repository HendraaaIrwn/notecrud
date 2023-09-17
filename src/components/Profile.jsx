import Image from "next/image";
import Avatar from "../assets/avatar.jpg";

export const Profile = () => {
  return (
    <div>
      <div className="relative w-fit">
        <Image className="rounded-full" src={Avatar} width={50} height={50} />
        <div className="absolute bottom-0 right-0 flex justify-center items-center bg-white rounded-full h-5 w-5 ">
          <div className=" bg-emerald-600 h-3 w-3 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
