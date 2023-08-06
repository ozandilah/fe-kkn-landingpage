import { ReactNode } from "react";

export interface BlogItemTypes {
  _id: string;
  title: string;
  subTitle: string;
  Keterangan: string;
  date: string;
  image: string[] | ReactNode[] | any;
}
export interface GaleriItemTypes {
  _id: string;
  image: string[] | ReactNode[];
}
