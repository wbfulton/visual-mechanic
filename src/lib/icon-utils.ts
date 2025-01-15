import {
  AirVent,
  Armchair,
  ArrowUp10,
  Car,
  Cloud,
  Cog,
  Cuboid,
  Fan,
  Fuel,
  LucideProps,
  OctagonPause,
  PackagePlus,
  ShipWheel,
  Wrench,
  Zap,
} from "lucide-react";

export const groupNameToIcon: {
  [key: string]: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
} = {
  accessories: PackagePlus,
  "body parts": Car,
  "brake system": OctagonPause,
  chassis: Cuboid,
  "cooling system": Fan,
  electrical: Zap,
  engine: Cog,
  "exhaust system": Cloud,
  "fuel system": Fuel,
  "heater / air conditioning": AirVent,
  "interior trim": Armchair,
  "service parts": Wrench,
  steering: ShipWheel,
  transmission: ArrowUp10,
};
