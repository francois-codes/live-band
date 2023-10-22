import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoSettingsOutline } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";

export const Menu: FC = () => {
  return (
    <header className="z-50 fixed flex items-center justify-between gap-8 w-full px-8 py-4 bg-background dark:bg-background">
      <div className="flex items-end align-start gap-8">
        <Image
          width={36}
          height={36}
          src={"/live-band-logo.png"}
          alt="live-band"
        />
        <h1 className="text-3xl font-bold">LiveBand</h1>
      </div>
      <div className="flex items-center align-center gap-8">
        <Button className="text-xl">
          <IoSettingsOutline />
        </Button>
        <Button className="text-xl">
          <IoQrCodeOutline />
        </Button>
      </div>
    </header>
  );
};
