import { useFloating } from "@floating-ui/react";

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
        className="bg-blue-400 w-6 h-6"
      />
    </>
  );
}
