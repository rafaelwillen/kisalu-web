import { ImageIcon, TrashIcon } from "lucide-react";

export default function FeaturedImagesInput() {
  return (
    <ul className="my-6 flex overflow-auto gap-5 min-h-[167px] pb-2">
      {imagesURLs.map((imageURL) => (
        <li className="relative min-w-[190px]">
          <img
            src={imageURL}
            width={190}
            height={167}
            alt=""
            className="w-48 h-full  rounded-lg object-cover"
          />
          <div className="absolute inset-0 z-10 flex justify-center items-center">
            <button
              className="bg-white p-3 rounded shadow text-accent-600 flex justify-center items-center hover:bg-danger hover:text-white duration-150"
              title="Eliminar imagem"
            >
              <TrashIcon size={16} />
            </button>
          </div>
        </li>
      ))}
      <li>
        <div className="w-48 h-full">
          <input
            type="file"
            name="featuredImage"
            id="featuredImage"
            className="hidden w-0 h-0"
            accept="image/*"
          />
          <label
            htmlFor="featuredImage"
            className="h-full cursor-pointer bg-accent-100 border border-accent-700 border-dashed flex items-center justify-center flex-col text-accent-700 rounded-lg gap-2"
          >
            <ImageIcon size={22} />
            <p className="font-regular text-sm">Adicionar</p>
          </label>
        </div>
      </li>
    </ul>
  );
}
