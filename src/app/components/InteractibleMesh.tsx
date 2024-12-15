import { Edges } from "@react-three/drei";
import { GroupProps, MeshProps } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { debounce } from "lodash";
import { useCallback, useMemo, useState } from "react";
import { Mesh } from "three";
import { MergedMeshes } from "./types";

export interface Nodes {
  [name: string]: Mesh;
}

interface Props {
  keys: Array<string>;
  nodes: Nodes;
  partNumber: string;
  selectedPartNumber?: string;
  onClick: (e: any, key: string) => void;
  onPointerOver: (e: any) => void;
  onPointerOut: () => void;
}

export const InteractibleMesh = ({
  keys,
  nodes,
  partNumber,
  onPointerOver,
  onPointerOut,
  onClick,
  selectedPartNumber,
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const debouncedHover = useCallback((val: boolean) => {
    const debounced = debounce(setHovered, 100);
    debounced(val);
  }, []);

  const onPointerOverHandler = useCallback((e: any) => {
    debouncedHover(true);
    onPointerOver(e);
  }, []);

  const onPointerOutHandler = useCallback(() => {
    debouncedHover(false);
    onPointerOut();
  }, []);

  const onClickHandler = useCallback((e: any) => {
    onClick(e, partNumber);
  }, []);

  const basicProps: GroupProps = useMemo(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
      scale: 0.1,
      onPointerOver: onPointerOverHandler,
      onPointerOut: onPointerOutHandler,
    }),
    [],
  );

  const compProps: MeshProps | {} = useMemo(
    () => (keys.length > 1 ? {} : (basicProps as MeshProps)),
    [],
  );

  const components = keys.map((key, i) => {
    return (
      <Select enabled={hovered || selectedPartNumber === partNumber}>
        <mesh
          name={key}
          key={key + i}
          {...compProps}
          geometry={nodes[key].geometry}
          material={nodes[key].material}
          onClick={(e: any) => onClickHandler(e)}
        />
      </Select>
    );
  });

  return keys.length > 1 ? (
    <group name={partNumber} {...basicProps}>
      {...components}
    </group>
  ) : (
    <>{...components}</>
  );
};

interface InstancedProps {
  keys: Array<string>;
  instances: MergedMeshes;
  partNumber: string;
  selectedPartNumber?: string;
  onClick: (e: any, key: string) => void;
  onPointerOver: (e: any) => void;
  onPointerOut: () => void;
}

export const InteractibleInstancedMesh = ({
  keys,
  instances,
  partNumber,
  onPointerOver,
  onPointerOut,
  onClick,
  selectedPartNumber,
}: InstancedProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const debouncedHover = useCallback((val: boolean) => {
    const debounced = debounce(setHovered, 100);
    debounced(val);
  }, []);

  const onPointerOverHandler = useCallback((e: any) => {
    debouncedHover(true);
    onPointerOver(e);
  }, []);

  const onPointerOutHandler = useCallback(() => {
    debouncedHover(false);
    onPointerOut();
  }, []);

  const onClickHandler = useCallback((e: any) => {
    onClick(e, partNumber);
  }, []);

  const basicProps: GroupProps = useMemo(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
      scale: 0.1,
      onPointerOver: onPointerOverHandler,
      onPointerOut: onPointerOutHandler,
    }),
    [],
  );

  const compProps: MeshProps | {} = useMemo(
    () => (keys.length > 1 ? {} : (basicProps as MeshProps)),
    [],
  );

  const components = keys.map((key, i) => {
    const Component = instances[key];

    return (
      <Component name={key} key={key + i} {...compProps} onClick={(e: any) => onClickHandler(e)}>
        {(hovered || selectedPartNumber === partNumber) && (
          <>
            <Edges
              linewidth={1}
              scale={1}
              threshold={0} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
              color="#eb0a1e"
            />
          </>
        )}
      </Component>
    );
  });

  return keys.length > 1 ? (
    <group name={partNumber} {...basicProps}>
      {...components}
    </group>
  ) : (
    <>{...components}</>
  );
};
