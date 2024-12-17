import { PartNumberData } from "@/data";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Props {
  mouseCoord?: { x: number; y: number };
  hoveredPartNumber?: string;
}

interface LCTooltipProps {
  hoveredPartNumber?: string;
  children: React.ReactNode;
}

export const LCTooltip: React.FC<LCTooltipProps> = ({
  children,
  hoveredPartNumber,
}: LCTooltipProps) => {
  const part = useMemo(
    () => PartNumberData.find((part) => part.partNumber === hoveredPartNumber),
    [hoveredPartNumber],
  );

  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltipContent, setShowTooltipContent] = useState(false);

  useEffect(() => {
    if (part === undefined) {
      setShowTooltipContent(false);
    } else {
      setShowTooltipContent(true);
    }
  }, [part]);

  // check if document exists
  const tooltipRef = useRef<HTMLDivElement>(document.createElement("div"));
  const tooltipContentRef = useRef<HTMLDivElement>(document.createElement("div"));

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const { clientX, clientY } = event;

      const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
      const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      //+12 is added to give a spice between cursor and tooltip
      let tooltipX = clientX + 12;
      let tooltipY = clientY + 12;

      // Check if tooltip exceeds the right side of the viewport
      if (tooltipX + tooltipWidth > viewportWidth) {
        tooltipX = clientX - tooltipWidth - 10;
      }

      // Check if tooltip exceeds the bottom of the viewport
      if (tooltipY + tooltipHeight > viewportHeight) {
        tooltipY = viewportHeight - tooltipHeight - 10;
      }

      if (part !== undefined) {
        setTooltipPosition({ x: tooltipX, y: tooltipY });
      }
    },
    [part],
  );

  // Debounce hover a bit to stop the ticker from being erratic
  const debouncedHandleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const debounced = debounce(handleMouseMove, 50);
      debounced(event);
    },
    [handleMouseMove],
  );

  const handleMouseEnter = useCallback(() => {
    setTooltipVisible(true);
    setShowTooltipContent(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltipVisible(false);
  }, []);

  const transitionStyle = "transition-tooltip ease-in duration-1000";
  const containerStyle = "p-3.5 bg-secondary rounded-lg shadow";
  const textStyle = "text-white font-semibold";
  const transitionLogic =
    showTooltipContent && tooltipContentRef.current
      ? `opacity-100 text-sm max-w-[${Math.round(tooltipContentRef.current.clientWidth)}px] max-h-[${Math.round(tooltipContentRef.current.clientHeight)}px]`
      : "opacity-0 text-none max-w-0 max-h-0 p-0 ";

  // useEffect(() => {
  //   console.log(
  //     tooltipRef.current?.clientWidth,
  //     tooltipRef.current?.clientWidth,
  //     Math.round(tooltipContentRef.current?.clientWidth),
  //     Math.round(tooltipContentRef.current?.clientHeight),
  //   );
  // }, [transitionLogic]);

  const content = (
    <>
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed ${transitionStyle} ${containerStyle} ${textStyle} ${transitionLogic}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: "2147483647",
          }}>
          <div ref={tooltipContentRef} className={`bg-white`}>
            {part?.label ?? "Bottom Trim"}
          </div>
        </div>
      )}
    </>
  );

  // animate difference in width from each tooltip
  // animate opacity when bringing in

  return (
    <div
      className="w-full h-full"
      // onMouseMove={debouncedHandleMouseMove}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed ${transitionStyle} ${containerStyle} ${textStyle} ${transitionLogic}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: "2147483647",
          }}>
          {content}
        </div>
      )} */}
      {children}
    </div>
  );
};
