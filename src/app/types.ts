import { MeshProps } from "@react-three/fiber";
import { ReactNode } from "react";

export type MergedMesh = (props: MeshProps) => ReactNode;
export type MergedMeshes = { [key: string]: MergedMesh };
