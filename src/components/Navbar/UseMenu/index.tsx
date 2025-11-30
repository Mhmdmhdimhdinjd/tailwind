import {
  useFloating,
  flip,
  shift,
  autoUpdate,
  useHover,
  useFocus,
  useInteractions,
  limitShift,
} from "@floating-ui/react";
import { useEffect, useState } from "react";
import Popover from "./popover";

export default function UseMenu() {
  const [open, setOpen] = useState(false);

  const { refs, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      shift({
        limiter: limitShift({
          offset: 5,
        }),
      }),
      flip({ mainAxis: true }),
    ],
  });

  const hover = useHover(context);
  const focus = useFocus(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);

  useEffect(() => {
    if (!open) return;

    return autoUpdate(
      refs.reference.current,
      refs.floating.current,
      context.update
    );
  }, [open, refs.reference, refs.floating, context.update]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className=" w-12 h-12 outline"
      />




      {open && (
        <Popover
          setFloating={refs.setFloating}
          getFloatingProps={getFloatingProps}
          rootContext={context}
        />
      )}
    </>
  );
}
