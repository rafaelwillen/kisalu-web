import Image from "next/image";

// TODO: Add props: image url, category name and description

export default function Banner() {
  return (
    <section className="relative rounded-2xl py-28 px-10 mb-5 lg:mx-8 lg:px-36">
      <Image
        src="https://placehold.co/1920x1280.png"
        alt="Category Banner"
        fill
        className="-z-10 rounded-2xl object-cover opacity-30"
      />
      <div className="space-y-1">
        <h1 className="font-bold text-3xl">Category Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          commodi!
        </p>
      </div>
    </section>
  );
}
