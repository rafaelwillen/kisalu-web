"use client";

import { File } from "lucide-react";
import { ChangeEvent, forwardRef, useState } from "react";
import { FileInputProps } from "./types";

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, errorMessage, value, onChange, ...props }, ref) => {
    1;
    const [filename, setFilename] = useState("");

    function updateFile(e: ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.item(0);
      if (!file) return;
      setFilename(file.name);
      onChange?.(file);
    }

    return (
      <div>
        <input
          type="file"
          {...props}
          ref={ref}
          name={props.name}
          id={props.name}
          className="hidden"
          onChange={updateFile}
          accept="application/pdf"
        />
        <label
          htmlFor={props.name}
          className="relative cursor-pointer flex flex-col justify-center items-center border border-dashed border-neutral-400 text-xs rounded-md hover:opacity-70 text-text-100 px-6 text-center h-64 w-full gap-2"
        >
          <File size={20} /> {label} {props.required && "*"}
          <p>{filename}</p>
        </label>
        {errorMessage && (
          <span className="text-xs text-danger">{errorMessage}</span>
        )}
      </div>
    );
  }
);

export default FileInput;
