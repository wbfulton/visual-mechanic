export interface SouqDiagram {
  title: string;
  number: number;
  image_urls?: string[];
  souq_uid?: number;
  car?: string;
  ssd?: string;
  cid?: number;
  misc_links: string[];
}
export interface SouqPart {
  // regex: "^\d{5}-[A-Za-z0-9]{4,7}$"
  // example: "17801-50040", "17801-T0040"
  number: string;
  part_code: string;
  car: string;
  amount?: string;
  name?: string;
  note?: string;
  date_range?: string;
  diagram_uid?: number;
  cid: number | undefined;
  gid: number | undefined;
  ssd: number | undefined;
}
export interface SouqPartsCategory {
  part_category: string;
  diagrams: SouqDiagram[];
  parts: SouqPart[];
}

export interface Group {
  id: number;
  name: string;
  diagrams_url: string | null;
  parent_group_id: number | null;
  sub_groups?: Group[];
  diagrams?: Diagram[];
}

export interface Part {
  id: number;
  number: string;
  amount: number | null;
  note: string | null;
  name: string;
  date_range: string | null;
  parent_diagram_id: number;
}

export interface Diagram {
  id: number;
  parent_group_id: number;
  name: string;
  img_url: string | null;
  parts: Part[] | null;
}
