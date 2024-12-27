import { MeshProps, ThreeEvent } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { debounce } from "lodash";
import { memo, useCallback, useMemo, useState } from "react";
import { Mesh } from "three";

const enum THREE_TYPES {
  MESH = "Mesh",
}

export interface Nodes {
  // [name: string]: Mesh | Mesh[];
  [name: string]: Mesh;
}

interface Props {
  node: Mesh;
  selectedPartNumber?: string;
  onClick: (e: ThreeEvent<MouseEvent>, partNumber: string) => void;
  onPointerOver: (e: ThreeEvent<MouseEvent>, partNumber: string) => void;
  onPointerOut: () => void;
}

export const InteractibleMesh = memo(
  function InteractibleMesh({
    node,
    onPointerOver,
    onPointerOut,
    onClick,
    selectedPartNumber,
  }: Props) {
    const [hovered, setHovered] = useState<boolean>(false);
    const partNumber = node.name;

    const debouncedHover = useCallback((val: boolean) => {
      const debounced = debounce(setHovered, 100);
      debounced(val);
    }, []);

    const meshEventHandlers: MeshProps = useMemo(
      () => ({
        onPointerOver: (e: ThreeEvent<MouseEvent>) => {
          debouncedHover(true);
          onPointerOver(e, partNumber);
        },
        onPointerOut: () => {
          debouncedHover(false);
          onPointerOut();
        },
        onClick: (e: ThreeEvent<MouseEvent>) => {
          onClick(e, partNumber);
        },
      }),
      [debouncedHover, onClick, onPointerOut, onPointerOver, partNumber],
    );

    if (node?.children.length > 0) {
      return (
        <>
          {node?.children.map((child, i) => (
            <InteractibleMesh
              key={child.name + i}
              node={child as Mesh}
              onPointerOver={onPointerOver}
              onPointerOut={onPointerOut}
              onClick={onClick}
              selectedPartNumber={selectedPartNumber}
            />
          ))}
        </>
      );
    }

    if (node?.type !== THREE_TYPES.MESH) {
      return null;
    }

    return (
      <Select key={partNumber + "-mesh"} enabled={hovered || selectedPartNumber === partNumber}>
        <mesh
          name={partNumber}
          {...meshEventHandlers}
          rotation={node.rotation}
          scale={node.scale}
          geometry={node.geometry}
          material={node.material}
        />
      </Select>
    );
  },
  // only re-render when a mesh becomes selected or unselected
  (oldProps, newProps) => {
    return oldProps.selectedPartNumber === newProps.selectedPartNumber;
  },
);
