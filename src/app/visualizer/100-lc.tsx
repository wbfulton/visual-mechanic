/*
Auto-generated by: https:github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 100-lc.gltf --transform --instanceall -j -k 
Files: 100-lc.gltf [233.55KB] > /Users/williamfulton/Desktop/100-lc-transformed.glb [566.97KB] (-143%)
*/

import { useGLTF } from "@react-three/drei";
import { debounce } from "lodash";

import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { Mesh } from "three";
import { InteractibleMesh } from "./InteractibleMesh";

export function LandCruiser({
  selectedPartNumber,
  setSelectedPartNumber,
  setHoveredPartNumber,
  ...props
}: {
  selectedPartNumber?: string;
  setSelectedPartNumber: Dispatch<SetStateAction<string | undefined>>;
  hoveredPartNumber?: string;
  setHoveredPartNumber?: Dispatch<SetStateAction<string | undefined>>;
} & GroupProps) {
  const { nodes } = useGLTF("/100-packed-lc.glb");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Debounce hover a bit to stop the ticker from being erratic
  const debouncedHover = useCallback(
    (partNumber?: string) => {
      if (setHoveredPartNumber) {
        const debounced = debounce(setHoveredPartNumber, 100);
        debounced(partNumber);
      }
    },
    [setHoveredPartNumber],
  );

  const hoverProps = useMemo(
    () => ({
      onPointerOver: (e: ThreeEvent<MouseEvent>, partNumber: string) => {
        e.stopPropagation();
        debouncedHover(partNumber);
        if (isMounted) {
          document.body.style.cursor = "pointer";
        }
      },
      onPointerOut: () => {
        debouncedHover(undefined);
        if (isMounted) {
          document.body.style.cursor = "default";
        }
      },
      onClick: (e: ThreeEvent<MouseEvent>, partNumber: string) => {
        e.stopPropagation();
        setSelectedPartNumber(partNumber);
      },
    }),
    [debouncedHover, isMounted, setSelectedPartNumber],
  );

  const scene = "Scene";

  const group = (
    <group {...props} dispose={null}>
      <InteractibleMesh
        node={nodes[scene] as Mesh}
        selectedPartNumber={selectedPartNumber}
        {...hoverProps}
      />
    </group>
  );

  return group;
}
