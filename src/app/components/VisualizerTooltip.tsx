import { Lc100OverviewPartsModel } from "@/data";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface VisualizerTooltipProps {
  hoveredPartNumber?: string;
  children: React.ReactNode;
}

export const VisualizerTooltip: React.FC<VisualizerTooltipProps> = ({
  children,
  hoveredPartNumber,
}: VisualizerTooltipProps) => {
  const part = useMemo(
    () =>
      Lc100OverviewPartsModel[0].parts.find(
        (part) =>
          part.number.toLowerCase() ===
          hoveredPartNumber?.split("_")[0]?.toLowerCase(),
      ) ??
      Lc100OverviewPartsModel[1].parts.find(
        (part) =>
          part.number.toLowerCase() ===
          hoveredPartNumber?.split("_")[0]?.toLowerCase(),
      ) ??
      Lc100OverviewPartsModel[2].parts.find(
        (part) =>
          part.number.toLowerCase() ===
          hoveredPartNumber?.split("_")[0]?.toLowerCase(),
      ) ??
      Lc100OverviewPartsModel[3].parts.find(
        (part) =>
          part.number.toLowerCase() ===
          hoveredPartNumber?.split("_")[0]?.toLowerCase(),
      ),
    [hoveredPartNumber],
  );

  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltipContent, setShowTooltipContent] = useState(false);

  useEffect(() => {
    if (hoveredPartNumber === undefined) {
      setShowTooltipContent(false);
    } else {
      setShowTooltipContent(true);
    }
  }, [hoveredPartNumber]);

  // check if document exists
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const tooltipContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    tooltipRef.current = document.createElement("div");
    tooltipContentRef.current = document.createElement("div");
  }, []);

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

      if (hoveredPartNumber !== undefined) {
        setTooltipPosition({ x: tooltipX, y: tooltipY });
      }
    },
    [hoveredPartNumber],
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

  // const transitionStyle = "transition-tooltip ease-in duration-1000";
  const containerStyle = "p-2 rounded-sm shadow bg-secondary shadow";
  const textStyle = "text-white";
  const transitionLogic =
    showTooltipContent && tooltipContentRef.current
      ? `opacity-100 text-sm max-w-[${Math.round(tooltipContentRef.current.clientWidth)}px] max-h-[${Math.round(tooltipContentRef.current.clientHeight)}px]`
      : "opacity-0 text-none max-w-0 max-h-0 p-0 ";

  const content = (
    <>
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed ${containerStyle} ${textStyle} ${transitionLogic}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: "2147483647",
          }}>
          <div ref={tooltipContentRef}>
            <p>{part?.name === "" ? hoveredPartNumber : part?.name}</p>
            <p>{part?.number ?? ""}</p>
          </div>
        </div>
      )}
    </>
  );

  // animate difference in width from each tooltip
  // animate opacity when bringing in

  return (
    <div
      className="h-full w-full"
      onMouseMove={debouncedHandleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed ${containerStyle} ${textStyle} ${transitionLogic}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: "2147483647",
          }}>
          {content}
        </div>
      )}
      {children}
    </div>
  );
};
