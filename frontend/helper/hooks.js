import { useCallback, useEffect, useRef, useState } from "react";

export function useElementInView(callback) {
  const elementReference = useRef(null);
  const optionalElementReference = useRef(null);

  const callbackElementInSight = useCallback((node) => {
    if (elementReference.current) elementReference.current.disconnect();

    elementReference.current = new IntersectionObserver(callback);

    if (node) elementReference.current.observe(node);
  }, []);

  return [callbackElementInSight, elementReference, optionalElementReference];
}
