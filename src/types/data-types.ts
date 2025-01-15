export interface Group {
  id: number;
  name: string;
  diagrams_url: string | null;
  parents?: Group[];
  children: Group[];
  diagrams?: Diagram[];
}

export interface Part {
  id: number;
  number: string;
  // amount: number | null;
  note: string | null;
  name: string;
  date_range: string | null;
  diagrams: Diagram[];
}

export interface Diagram {
  id: number;
  name: string;
  img_url: string | null;
  groups: Group[];
  parts: Part[];
}
