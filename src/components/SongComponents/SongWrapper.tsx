import { FC, PropsWithChildren } from "react";

interface SongWrapperProps {
  songTitle: string;
}

export const SongWrapper: FC<PropsWithChildren<SongWrapperProps>> = ({
  children,
  songTitle
}) => {
  return (
    <div className="relative flex flex-col justify-start font-mono">
      {children}
    </div>
  );
};
