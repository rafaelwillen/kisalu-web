import Image from "next/image";

type Props = {
  imageUrl?: string;
  name: string;
  description?: string;
};

export default function Banner({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,commodi!",
  imageUrl = "https://placehold.co/1920x1280.png",
  name,
}: Props) {
  return (
    <section className="relative rounded-2xl py-28 px-10 mb-5 lg:mx-8 lg:px-36 text-white shadow-xl">
      <Image
        src={imageUrl}
        alt="Category Banner"
        fill
        className="-z-10 rounded-2xl object-cover brightness-[0.4]"
      />
      <div className="space-y-1">
        <h1 className="font-bold text-3xl">{name}</h1>
        <p className="max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
