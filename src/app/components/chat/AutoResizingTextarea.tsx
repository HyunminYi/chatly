"use client";
import { TextareaHTMLAttributes, useEffect, useRef } from "react";
import { Textarea } from "@/app/components/ui/textarea";

const AutoResizingTextarea = ({
  value,
  ...others
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);
  return (
    <Textarea
      value={value}
      ref={textareaRef}
      {...others}
      className="min-h-[20px] max-h-[128px] font-normal tracking-normal rounded-full resize-none px-10 py-4 mx-4 focus-visible:ring-blue-400"
    />
  );
};

export default AutoResizingTextarea;
