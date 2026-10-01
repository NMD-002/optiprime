"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";

interface ModelViewerProps {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  "camera-controls"?: boolean;
  style?: React.CSSProperties;
  orientation?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "camera-orbit"?: string;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

export default function ModelViewer({
  src,
  alt,
  ar,
  autoRotate,
  "camera-controls": cameraControls,
  style,
  orientation,
  "min-camera-orbit": minCameraOrbit,
  "max-camera-orbit": maxCameraOrbit,
  "camera-orbit": cameraOrbit,
  setIsLoading,
}: ModelViewerProps) {
  const modelRef = useRef<ModelViewerElement | null>(null);

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  useEffect(() => {
    const modelViwer = modelRef.current;
    if (!modelViwer) return;

    const handleLoad = () => {
      console.log("Model loaded");
      setIsLoading && setIsLoading(false);
    };
    modelViwer.addEventListener("load", handleLoad);

    return () => {
      modelViwer.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <model-viewer
      ref={modelRef}
      src={src}
      alt={alt}
      ar={ar}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      style={style}
      orientation={orientation}
      min-camera-orbit={minCameraOrbit}
      max-camera-orbit={maxCameraOrbit}
      camera-orbit={cameraOrbit}
    ></model-viewer>
  );
}
