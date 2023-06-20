"use client";

import classNames from "classnames";
import { UserCircle } from "lucide-react";
import { ChangeEvent, forwardRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { AvatarImageInputProps } from "./types";

const AvatarImageInput = forwardRef<HTMLInputElement, AvatarImageInputProps>(
  (
    {
      label,
      errorMessage,
      selectedImage,
      onImageSelect,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const [image, setImage] = useState<null | string>(
      selectedImage ? URL.createObjectURL(selectedImage) : null
    );

    function updateImage(e: ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.item(0);
      if (!file) return;
      if (onImageSelect) {
        onImageSelect(file);
        setImage(URL.createObjectURL(file));
      }
    }

    return (
      <div className="flex flex-col items-center gap-2">
        <input
          type="file"
          id={props.name}
          ref={ref}
          {...props}
          className="hidden"
          onChange={updateImage}
          accept="image/*"
        />
        <label
          htmlFor={props.name}
          className={classNames(
            "relative flex flex-col items-center justify-center cursor-pointer border border-dashed border-neutral-400  rounded-full hover:opacity-70 px-6",
            containerClassName ? containerClassName : "w-20 h-20"
          )}
        >
          {!image ? (
            <UserCircle size={40} className="text-text-100" />
          ) : (
            <img
              src={image}
              className="object-cover absolute inset-0 scale-95 rounded-full w-full h-full"
              alt=""
            />
          )}
        </label>
        <span className="text-center text-sm font-medium leading-7">
          {label} {props.required && "*"}
        </span>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

export default AvatarImageInput;
