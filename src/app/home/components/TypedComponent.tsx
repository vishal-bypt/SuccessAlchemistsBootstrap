"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["freedom", "enjoyment", "growth"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span className="inner_first_div_span" ref={typedRef}></span>;
};

export default TypedComponent;

