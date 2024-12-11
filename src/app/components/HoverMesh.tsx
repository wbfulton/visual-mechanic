import { useSpring } from "@react-spring/three";
import { Edges } from "@react-three/drei";
import { GroupProps, MeshProps } from "@react-three/fiber";
import { debounce } from "lodash";
import { useCallback, useMemo, useState } from "react";
import { MergedMeshes } from "./types";

interface Props {
  groupName?: string;
  keys: Array<string>;
  instances: MergedMeshes;
  onPointerOver: (e: any) => void;
  onPointerOut: () => void;
}

export const HoverMesh = ({ keys, instances, onPointerOver, onPointerOut, groupName }: Props) => {
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

  const basicProps: GroupProps = useMemo(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
      scale: 0.1,
      onPointerOver: onPointerOverHandler,
      onPointerOut: onPointerOutHandler,
    }),
    [],
  );

  const compProps: MeshProps | {} = useMemo(() => (groupName ? {} : (basicProps as MeshProps)), []);

  const { scale } = useSpring({ scale: hovered ? 1.005 : 1 });
  const { edgeWidth } = useSpring({ edgeWidth: hovered ? 3 : 0 });

  const components = keys.map((key, i) => {
    const Component = instances[key];

    return (
      <Component name="key" key={key + i} {...compProps}>
        {hovered && (
          <>
            <Edges
              linewidth={2}
              scale={1.01}
              threshold={25} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
              color="#eb0a1e"
            />
          </>
        )}
      </Component>
    );
  });

  return groupName ? (
    <group name={groupName} {...basicProps}>
      {...components}
    </group>
  ) : (
    <>{...components}</>
  );
};
