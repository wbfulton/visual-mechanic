import { UUID } from "crypto";

// regex: "^\d{5}-[A-Za-z0-9]{4,7}$"
// example: "17801-50040", "17801-T0040"
type PartNumber = string;

// should part number just be ID?
// not bad until part number changes
// can ID's change?

export interface Part {
  id?: UUID;
  partNumber: PartNumber;
  name: string;
  description?: string;
  oldPartNumbers?: PartNumber[];
}

export interface PartsModel {
  id?: UUID; // opt for now
  name: string;
  parts: Part[]; // Part instad of UUID for now bc no API
  description?: string;
  category?: string;
}

// Endpoints to create
// GET image urls
// GET link to buy

// https://partsouq.com/en/catalog/genuine/groups?c=TOYOTA00&ssd=%24%2AKwESJjdGUhNjQWEMTXAxEEpefnlnFhkUFQcoG1NVZnJuamhrLjkVf1FVUWB2b344JS8SG2pmbmUGZysiInNkdAcRERZaDx4PYFoEREMDHARbQFIREhMXAg0GBhADSRoBBHdhc2dpW1tLAkxFBRoBBHEjPVoQEWoKZ2J2YTIhSQwBBFFDAxwEFwIHTA0GBUZIQgZDV1kYXAAAAACjj4Nq%24&vid=0&cid=&q=
export const temp: PartsModel = {
  name: "LC 100 Overview",
  description: "",
  parts: [],
};

// https://partsouq.com/en/catalog/genuine/groups?c=TOYOTA00&ssd=%24%2AKwESJjdGUhNjQWEMTXAxEEpefnlnFhkUFQcoG1NVZnJuamhrLjkVf1FVUWB2b344JS8SG2pmbmUGZysiInNkdAcRERZaDx4PYFoEREMDHARbQFIREhMXAg0GBhADSRoBBHdhc2dpW1tLAkxFBRoBBHEjPVoQEWoKZ2J2YTIhSQwBBFFDAxwEFwIHTA0GBUZIQgZDV1kYXAAAAACjj4Nq%24&vid=0&cid=&q=
export const Lc100OverviewPartsModel: PartsModel = {
  name: "LC 100 Overview",
  description: "",
  parts: [
    {
      partNumber: "53301-60320",
      oldPartNumbers: ["53301-60330"],
      name: "Hood",
    },
    {
      partNumber: "front-bumper",
      // keys: ["Object_8", "Object_8_1", "Object_8_2", "Object_8_3"],
      name: "Front Bumper",
    },
    { partNumber: "Body", name: "Body" },
    {
      partNumber: "passenger-front-rim",
      name: "Passenger Front Rim",
    },
    {
      partNumber: "passenger-front-tire",
      name: "Passenger Front Tire",
    },
    {
      partNumber: "Passengerrearrim",
      name: "Passenger Rear Rim",
    },
    {
      partNumber: "Passengerreartire",
      name: "Passenger Rear Tire",
    },
    {
      partNumber: "Frontlefttire",
      name: "Driver Front Tire",
    },
    {
      partNumber: "Driverfrontrim",
      name: "Driver Front Rim",
    },
    {
      partNumber: "Driverreartire",
      name: "Driver Rear Tire",
    },
    {
      partNumber: "Driverrearrim",
      name: "Driver Rear Rim",
    },
    {
      partNumber: "Bottomtrim",
      name: "Bottom Trim",
    },
    {
      partNumber: "Rearvents",
      name: "Rear Vents",
    },
    {
      partNumber: "Roofrack",
      name: "Roof rack",
    },
    {
      partNumber: "Miscreartrim",
      name: "Misc Rear Trim",
    },
    {
      partNumber: "Windshield",
      name: "Windshield",
    },
    {
      partNumber: "Windowtrim",
      name: "Window Trim",
    },
    {
      partNumber: "Passengermirror",
      name: "Passenger Mirror",
    },
    {
      partNumber: "Passengerhandle",
      name: "Passenger Door Handle",
    },
    {
      partNumber: "Passengerupperpanel",
      name: "Passenger Upper Panel",
    },
    {
      partNumber: "Passengerbottompanel",
      name: "Passenger Bottom Panel",
    },
    {
      partNumber: "Passengertrim",
      name: "Passenger Trim",
    },
    {
      partNumber: "Passengerwindow",
      name: "Passenger Window",
    },
    {
      partNumber: "Driverbottompanel",
      name: "Driver Bottom Panel",
    },
    {
      partNumber: "Driverglass",
      name: "Driver Window",
    },
    {
      partNumber: "Leftmirror",
      name: "Driver Mirror",
    },
    {
      partNumber: "Leftmirror001",
      name: "Driver Mirror",
    },
    {
      partNumber: "Leftmirror002",
      name: "Driver Mirror",
    },
    {
      partNumber: "Leftmirror003",
      name: "Driver Mirror",
    },
    {
      partNumber: "cab-interior",
      name: "Cab Interior",
    },
    {
      partNumber: "Frontlefthandle",
      name: "Driver Door Handle",
    },
    {
      partNumber: "Leftmidtrim",
      name: "Driver Mid Trim",
    },
    {
      partNumber: "Driverdoor",
      name: "Driver Door",
    },
    {
      partNumber: "Driverpanel",
      name: "Driver Panel",
    },
    {
      partNumber: "Passengerreardoor",
      name: "Passenger Rear Door",
    },
    {
      partNumber: "Passengerrearhandle",
      name: "Passenger Rear Door Handle",
    },
    {
      partNumber: "Passengerrearpanel",
      name: "Passenger Rear Door Panel",
    },
    {
      partNumber: "Passengerbottompanel1",
      name: "Passenger Bottom Door Panel",
    },
    {
      partNumber: "Passengerreartrim",
      name: "Passenger Rear Trim",
    },
    {
      partNumber: "Passengerrearwindow",
      name: "Passenger Rear Window",
    },
    {
      partNumber: "Driverrearbottompanel",
      name: "Driver Rear Bottom Door Panel",
    },
    {
      partNumber: "Driverreartrim",
      name: "Driver Rear Trim",
    },
    {
      partNumber: "Driverreardoor",
      name: "Driver Rear Door",
    },
    {
      partNumber: "Driverrearhandle",
      name: "Driver Rear Door Handle",
    },
    {
      partNumber: "Driverreartoppanel",
      name: "Driver Rear Top Door Panel",
    },
    {
      partNumber: "Grill",
      // keys: ["Object_156_1", "Object_156_2"],
      name: "Grill",
    },
    {
      partNumber: "Driverrearwindow",
      name: "Driver Rear Window",
    },
    {
      partNumber: "Frontlefttrim",
      name: "Driver Front Trim",
    },
    {
      partNumber: "Frontleftbottompanel",
      name: "Driver Bottom Door Panel",
    },
    {
      partNumber: "Frontleftpanel",
      name: "Driver Door Panel",
    },
    {
      partNumber: "Leftblinker",
      name: "Driver Blinker",
    },
    {
      partNumber: "Leftheadlight",
      name: "Driver Headlight",
    },
    {
      partNumber: "Passengerfrontbottompanel",
      name: "Passenger Bottom Door Panel",
    },
    {
      partNumber: "Passengerfrontupperpanel",
      name: "Passenger Upper Door Panel",
    },
    {
      partNumber: "Passengerfronttrim",
      name: "Passenger Door Trim",
    },
    {
      partNumber: "Rightblinker",

      name: "Passenger Blinker",
    },
    {
      partNumber: "Rightheadlight",
      name: "Passenger Headlight",
    },
    {
      partNumber: "Exhaust",
      name: "Exhaust",
    },
    {
      partNumber: "Enginedrivetrain",
      name: "Engine and Drivetrain",
    },
    {
      partNumber: "Reardiffaxle",
      name: "Rear Diff and Axel",
    },
    {
      partNumber: "rear-tailight",
      // keys: ["Object_186", "Object_186_1", "Object_186_2"],
      name: "Rear Tailights",
    },
    {
      partNumber: "Backupperlight",
      name: "Rear Upper Light",
    },
    {
      partNumber: "Tailgatetrim",
      name: "Tailgate trim",
    },
    {
      partNumber: "rear-wiper",
      // keys: ["Object_192_1", "Object_192_2"],
      name: "Rear Wiper",
    },
    {
      partNumber: "Rearwindow",
      name: "Rear Window",
    },
    {
      partNumber: "Tailgate",
      name: "Tailgate",
    },
    {
      partNumber: "Bumpertrim",
      name: "Rear Bumper Trim",
    },
    {
      partNumber: "Rearbumper",
      name: "Rear Bumper ",
    },
    {
      partNumber: "Bumperlight",
      name: "Rear Bumper Light",
    },
  ],
};
