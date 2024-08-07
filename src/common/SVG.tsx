import React from "react";
import { ReactSVG } from "react-svg";

interface ISVG {
  src: any;
  title?: string;
  height?: number | string;
  width?: number | string;
  fallback?: any;
  renumerateIRIElements?: boolean;
  wrapperStyle?: object;
  fill?: string;
  id?: string;
}

export const SVG: React.FC<ISVG> = ({ id, src, title, fallback, renumerateIRIElements, wrapperStyle, height, width, fill }) => {
  return <>
    <ReactSVG
      beforeInjection={(height || width || fill) ? ((svg) => {
        if (height) {
          svg.setAttribute('height', height.toString());
        }
        if (width) {
          svg.setAttribute('width', width.toString());
        }
        if (fill) {
          svg.setAttribute('fill', fill);
        }
        // svg.setAttribute('preserveAspectRatio', `xMidYMid meet`);
      }) : () => { }}
      evalScripts="always"
      fallback={fallback ?? (() => <span>Error!</span>)}
      renumerateIRIElements={renumerateIRIElements ?? false}
      src={src}
      title={title ?? ""}
      style={wrapperStyle ?? { position: 'relative' }}
      id={id}
    />
  </>;
};

export default SVG;