import {
  useFloating,
  flip,
  shift,
  autoUpdate,
  useHover,
  useFocus,
  useInteractions,
  limitShift,
  safePolygon,
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
    transform:false
  });

  const hover = useHover(context,{handleClose: safePolygon(),});
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
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="outline"
      >
        <p>Alex Fergosen</p>
        <img src="src/" className="rounded-full"/>
      </div>




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
