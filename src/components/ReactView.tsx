import * as React from "react";
import { ChemCanvas } from "./ChemCanvas"

//在本区域下方挂载独立view组件
export const ReactView = () => {
  return <div style={{ width: "100%", height: "100%" }} ><ChemCanvas></ChemCanvas><slot></slot></ div>;
};