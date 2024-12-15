/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 100-lc.gltf --transform --instanceall -j -k 
Files: 100-lc.gltf [233.55KB] > /Users/williamfulton/Desktop/100-lc-transformed.glb [566.97KB] (-143%)
*/

import { Billboard, Merged, Text, useGLTF } from "@react-three/drei";

import { PartNumberData } from "@/data";
import { debounce } from "lodash";
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from "react";
import { Object3D, Object3DEventMap } from "three";
import { InteractibleInstancedMesh } from "./InteractibleMesh";
import { MergedMeshes } from "./types";

//           <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />

export function LandCruiser({
  selectedPartNumber,
  setSelectedPartNumber,
  ...props
}: {
  selectedPartNumber?: string;
  setSelectedPartNumber: Dispatch<SetStateAction<string | undefined>>;
  [key: string]: any;
}) {
  const gltf = useGLTF("/100-lc-transformed.glb");
  console.log(gltf);
  const { nodes } = gltf;
  const instances: { [key: string]: Object3D<Object3DEventMap> } = useMemo(
    () => ({
      Object: nodes.Object_6,
      Object1: nodes.Object_10,
      Object2: nodes.Object_13,
      Object3: nodes.Object_8,
      Object4: nodes.Object_8_1,
      Object5: nodes.Object_8_2,
      Object6: nodes.Object_8_3,
      Object7: nodes.Object_17,
      Object8: nodes.Object_19,
      Object9: nodes.Object_23,
      Object10: nodes.Object_25,
      Object11: nodes.Object_28,
      Object12: nodes.Object_29,
      Object13: nodes.Object_35,
      Passengerrearrim: nodes["passenger-rear-rim"],
      Passengerreartire: nodes["passenger-rear-tire"],
      Frontlefttire: nodes["front-left-tire"],
      Driverfrontrim: nodes["driver-front-rim"],
      Object14: nodes.Object_41,
      Driverreartire: nodes["driver-rear-tire"],
      Driverrearrim: nodes["driver-rear-rim"],
      Object15: nodes.Object_47,
      Object16: nodes.Object_53,
      Passengerfrontrim: nodes["passenger-front-rim"],
      Passengerronttire: nodes["passenger-ront-tire"],
      Body: nodes.body,
      Object17: nodes.Object_59,
      Object18: nodes.Object_60,
      Bottomtrim: nodes["bottom-trim"],
      Object19: nodes.Object_64,
      Rearvents: nodes["rear-vents"],
      Roofrack: nodes["roof-rack"],
      Object20: nodes.Object_70,
      Object21: nodes.Object_72,
      Miscreartrim: nodes["misc-rear-trim"],
      Object22: nodes.Object_75,
      Object23: nodes.Object_79,
      Object24: nodes.Object_77,
      Windshield: nodes.windshield,
      Object25: nodes.Object_83,
      Object26: nodes.Object_85,
      Object27: nodes.Object_88,
      Object28: nodes.Object_89,
      Object29: nodes.Object_92,
      Object30: nodes.Object_93,
      Object31: nodes.Object_94,
      Object32: nodes.Object_95,
      Object33: nodes.Object_100,
      Object34: nodes.Object_99,
      Object35: nodes.Object_102,
      Object36: nodes.Object_104,
      Object37: nodes.Object_105,
      Object38: nodes.Object_107,
      Object39: nodes.Object_108,
      Object40: nodes.Object_110,
      Object41: nodes.Object_111,
      Object42: nodes.Object_113,
      Object43: nodes.Object_114,
      Object44: nodes.Object_116,
      Object45: nodes.Object_118,
      Object46: nodes.Object_120,
      Object47: nodes.Object_121,
      Object48: nodes.Object_124,
      Object49: nodes.Object_125,
      Object50: nodes.Object_128,
      Object51: nodes.Object_130,
      Object52: nodes.Object_133,
      Object53: nodes.Object_134,
      Object54: nodes.Object_136,
      Object55: nodes.Object_138,
      Object56: nodes.Object_139,
      Object57: nodes.Object_141,
      Windowtrim: nodes["window-trim"],
      Object58: nodes.Object_148,
      Object59: nodes.Object_149,
      Passengermirror: nodes["passenger-mirror"],
      Object60: nodes.Object_154,
      Object61: nodes.Object_155,
      Object62: nodes.Object_156,
      Object63: nodes.Object_158,
      Object64: nodes.Object_159,
      Object65: nodes.Object_162,
      Object66: nodes.Object_163,
      Object67: nodes.Object_167,
      Object68: nodes.Object_168,
      Passengerhandle: nodes["passenger-handle"],
      Passengerupperpanel: nodes["passenger-upper-panel"],
      Object69: nodes.Object_172,
      Object70: nodes.Object_173,
      Passengerbottompanel: nodes["passenger-bottom-panel"],
      Passengertrim: nodes["passenger-trim"],
      Passengerwindow: nodes["passenger-window"],
      Driverbottompanel: nodes["driver-bottom-panel"],
      Driverglass: nodes["driver-glass"],
      Leftmirror: nodes["left-mirror"],
      Object71: nodes.Object_177,
      Object72: nodes.Object_179,
      Frontlefthandle: nodes["front-left-handle"],
      Object73: nodes.Object_183,
      Object74: nodes.Object_184,
      Object75: nodes.Object_185,
      Driverdoor: nodes["driver-door"],
      Object76: nodes.Object_187,
      Object77: nodes.Object_191,
      Object78: nodes.Object_192,
      Driverpanel: nodes["driver-panel"],
      Object79: nodes.Object_196,
      Object80: nodes.Object_197,
      Leftmidtrim: nodes["left-mid-trim"],
      Object81: nodes.Object_201,
      Object82: nodes.Object_202,
      Object83: nodes.Object_206,
      Object84: nodes.Object_209,
      Object85: nodes.Object_210,
      Object86: nodes.Object_212,
      Passengerreardoor: nodes["passenger-rear-door"],
      Object87: nodes.Object_217,
      Passengerrearhandle: nodes["passenger-rear-handle"],
      Passengerrearpanel: nodes["passenger-rear-panel"],
      Object88: nodes.Object_221,
      Object89: nodes.Object_222,
      Passengerbottompanel1: nodes["passenger-bottom-panel001"],
      Passengerreartrim: nodes["passenger-rear-trim"],
      Passengerrearwindow: nodes["passenger-rear-window"],
      Driverrearbottompanel: nodes["driver-rear-bottom-panel"],
      Driverreartrim: nodes["driver-rear-trim"],
      Driverrearwindow: nodes["driver-rear-window"],
      Object90: nodes.Object_226,
      Object91: nodes.Object_229,
      Object92: nodes.Object_230,
      Driverreardoor: nodes["driver-rear-door"],
      Object93: nodes.Object_232,
      Driverrearhandle: nodes["driver-rear-handle"],
      Driverreartoppanel: nodes["driver-rear-top-panel"],
      Object94: nodes.Object_237,
      Object95: nodes.Object_241,
      Object96: nodes.Object_242,
      Object97: nodes.Object_262,
      Hood: nodes.hood,
      Object98: nodes.Object_263,
      Object99: nodes.Object_156_1,
      Object100: nodes.Object_156_2,
      Object101: nodes.Object_249,
      Object102: nodes.Object_250,
      Object103: nodes.Object_252,
      Object104: nodes.Object_255,
      Object105: nodes.Object_256,
      Object106: nodes.Object_257,
      Object107: nodes.Object_258,
      Frontlefttrim: nodes["front-left-trim"],
      Frontleftbottompanel: nodes["front-left-bottom-panel"],
      Object108: nodes.Object_267,
      Frontleftpanel: nodes["front-left-panel"],
      Object109: nodes.Object_271,
      Object110: nodes.Object_273,
      Leftblinker: nodes["left-blinker"],
      Leftheadlight: nodes["left-headlight"],
      Object111: nodes.Object_279,
      Passengerfrontbottompanel: nodes["passenger-front-bottom-panel"],
      Object112: nodes.Object_283,
      Passengerfrontupperpanel: nodes["passenger-front-upper-panel"],
      Object113: nodes.Object_285,
      Passengerfronttrim: nodes["passenger-front-trim"],
      Rightblinker: nodes["right-blinker"],
      Rightheadlight: nodes["right-headlight"],
      Object114: nodes.Object_291,
      Object115: nodes.Object_292,
      Exhaust: nodes.exhaust,
      Enginedrivetrain: nodes["engine-drivetrain"],
      Reardiffaxle: nodes["rear-diff-axle"],
      Object116: nodes.Object_302,
      Object117: nodes.Object_304,
      Object118: nodes.Object_306,
      Object119: nodes.Object_309,
      Object120: nodes.Object_186,
      Object121: nodes.Object_186_1,
      Object122: nodes.Object_186_2,
      Object123: nodes.Object_312,
      Backupperlight: nodes["back-upper-light"],
      Object124: nodes.Object_316,
      Tailgatetrim: nodes["tailgate-trim"],
      Object125: nodes.Object_321,
      Object126: nodes.Object_192_1,
      Object127: nodes.Object_192_2,
      Object128: nodes.Object_326,
      Object129: nodes.Object_328,
      Rearwindow: nodes["rear-window"],
      Tailgate: nodes.tailgate,
      Bumpertrim: nodes["bumper-trim"],
      Object130: nodes.Object_332,
      Rearbumper: nodes["rear-bumper"],
      Bumperlight: nodes["bumper-light"],
    }),
    [nodes],
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances: MergedMeshes) => (
        <Model
          instances={instances}
          selectedPartNumber={selectedPartNumber}
          setSelectedPartNumber={setSelectedPartNumber}
        />
      )}
    </Merged>
  );
}

export function Model({
  instances,
  selectedPartNumber,
  setSelectedPartNumber,
  ...props
}: {
  instances: MergedMeshes;
  selectedPartNumber: string | undefined;
  setSelectedPartNumber: Dispatch<SetStateAction<string | undefined>>;
  [key: string]: any;
}) {
  const [hovered, setHover] = useState<string>();
  // Debounce hover a bit to stop the ticker from being erratic
  const debouncedHover = useCallback((name?: string) => {
    const debounced = debounce(setHover, 100);
    debounced(name);
  }, []);

  const over = useCallback(
    (name: string) => (e: any) => (e.stopPropagation(), debouncedHover(name)),
    [],
  );

  const hoverProps = useCallback(
    (name: string) => ({
      instances,
      selectedPartNumber,
      onPointerOver: (e: any) => {
        over(name)(e);
      },
      onPointerOut: () => debouncedHover(undefined),
      onClick: (e: any, key: string) => {
        e.stopPropagation();
        setSelectedPartNumber(key);
      },
    }),
    [selectedPartNumber],
  );

  return (
    <>
      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text
          position={[0, 15, 0]} // base position on mesh
          color="#384147"
          fontSize={1}
          font="Inter-Regular.woff"
          letterSpacing={-0.05}>
          {hovered ? hovered : ""}
        </Text>
      </Billboard>

      <group {...props} dispose={null}>
        {PartNumberData.map((data) => (
          <InteractibleInstancedMesh
            key={data.partNumber}
            partNumber={data.partNumber}
            keys={data.keys}
            {...hoverProps(data.label)}
          />
        ))}
        <instances.Object name="Object_6" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object1 name="Object_10" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object2 name="Object_13" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object7 name="Object_17" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object8 name="Object_19" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object9 name="Object_23" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object10 name="Object_25" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object11 name="Object_28" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object12 name="Object_29" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object13 name="Object_35" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object14 name="Object_41" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object15 name="Object_47" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object16 name="Object_53" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object17 name="Object_59" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object18 name="Object_60" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object19 name="Object_64" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object20 name="Object_70" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object21 name="Object_72" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object22 name="Object_75" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object23 name="Object_79" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object24 name="Object_77" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object25 name="Object_83" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object26 name="Object_85" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object27 name="Object_88" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object28 name="Object_89" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object29 name="Object_92" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object30 name="Object_93" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object31 name="Object_94" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object32 name="Object_95" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object33 name="Object_100" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object34 name="Object_99" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object35 name="Object_102" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object36 name="Object_104" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object37 name="Object_105" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object38 name="Object_107" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object39 name="Object_108" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object40 name="Object_110" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object41 name="Object_111" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object42 name="Object_113" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object43 name="Object_114" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object44 name="Object_116" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object45 name="Object_118" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object46 name="Object_120" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object47 name="Object_121" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object48 name="Object_124" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object49 name="Object_125" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object50 name="Object_128" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object51 name="Object_130" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object52 name="Object_133" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object53 name="Object_134" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object54 name="Object_136" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object55 name="Object_138" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object56 name="Object_139" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object57 name="Object_141" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object58 name="Object_148" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object59 name="Object_149" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object60 name="Object_154" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object61 name="Object_155" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object62 name="Object_156" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object63 name="Object_158" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object64 name="Object_159" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object65 name="Object_162" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object66 name="Object_163" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object67 name="Object_167" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object68 name="Object_168" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object69 name="Object_172" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object70 name="Object_173" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object71 name="Object_177" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object72 name="Object_179" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object73 name="Object_183" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object74 name="Object_184" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object75 name="Object_185" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object76 name="Object_187" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object77 name="Object_191" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object78 name="Object_192" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object79 name="Object_196" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object80 name="Object_197" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object81 name="Object_201" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object82 name="Object_202" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object83 name="Object_206" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object84 name="Object_209" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object85 name="Object_210" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object86 name="Object_212" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object87 name="Object_217" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object88 name="Object_221" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object89 name="Object_222" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object90 name="Object_226" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object91 name="Object_229" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object92 name="Object_230" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object93 name="Object_232" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object94 name="Object_237" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object95 name="Object_241" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object96 name="Object_242" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object97 name="Object_262" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object98 name="Object_263" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object101 name="Object_249" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object102 name="Object_250" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object103 name="Object_252" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object104 name="Object_255" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object105 name="Object_256" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object106 name="Object_257" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object107 name="Object_258" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object108 name="Object_267" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object109 name="Object_271" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object110 name="Object_273" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object111 name="Object_279" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object112 name="Object_283" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object113 name="Object_285" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object114 name="Object_291" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object115 name="Object_292" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object116 name="Object_302" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object117 name="Object_304" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object118 name="Object_306" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object119 name="Object_309" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object123 name="Object_312" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object124 name="Object_316" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object125 name="Object_321" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object128 name="Object_326" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object129 name="Object_328" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <instances.Object130 name="Object_332" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      </group>
    </>
  );
}