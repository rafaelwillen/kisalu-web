import { ImageSquare } from "@phosphor-icons/react";
import { ChangeEvent, forwardRef, useState } from "react";
import { ImageInputProps } from "./types";

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ label, errorMessage, selectedImage, onImageSelect, ...props }, ref) => {
    const [image, setImage] = useState<null | string>(null);

    function updateImage(e: ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.item(0);
      if (!file) return;
      if (onImageSelect) {
        onImageSelect(file);
        setImage(URL.createObjectURL(file));
      }
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
          onChange={updateImage}
          accept="image/*"
        />
        <label
          htmlFor={props.name}
          className="relative flex flex-col justify-center items-center border border-dashed border-neutral-400 text-xs rounded-md hover:opacity-70 text-text-100 px-6 text-center h-64 w-full gap-2"
        >
          {!image ? (
            <>
              <ImageSquare size={20} /> {label}
            </>
          ) : (
            <img
              src={image}
              className="object-cover absolute inset-0 scale-95 rounded-md w-full h-full"
              alt=""
            />
          )}
        </label>
        {errorMessage && (
          <span className="text-xs text-danger">{errorMessage}</span>
        )}
      </div>
    );
  }
);

export default ImageInput;
