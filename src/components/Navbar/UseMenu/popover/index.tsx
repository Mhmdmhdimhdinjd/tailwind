import { useFloating } from "@floating-ui/react";
import {
  RiAccountCircleLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";

export default function Popover({
  getFloatingProps,
  rootContext,
  setFloating,
}: {
  getFloatingProps: any;
  rootContext: any;
  setFloating: any;
}) {
  const { floatingStyles } = useFloating({
    rootContext,
  });
  return (
    <>
      <div
        ref={setFloating}
        {...getFloatingProps()}
        style={floatingStyles}
        className="w-3xs p-2 bg-light-bg-paper shadow-2xl rounded-lg flex flex-col gap-2 !transition-none  *:p-2 *:bg-light-bg-default *:hover:shadow-md *:text-black *:flex *:justify-between *:items-center"
      >
        <div>
          <p>Role:</p>
          <p className="font-medium">Admin</p>
        </div>
        <div>
          <p>Profile</p> <RiAccountCircleLine />
        </div>
        <div>
          <p>Exit</p>
          <RiLogoutBoxRLine />
        </div>
      </div>
    </>
  );
}
