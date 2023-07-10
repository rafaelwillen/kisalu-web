import Link from "next/link";

export default function RecentServices() {
  return (
    <div className="bg-white rounded px-7 py-5">
      <div className="flex justify-between flex-col sm:flex-row pb-4 border-b border-neutral-300 mb-8">
        <h2 className="font-medium text-lg">Serviços Recentemente Comprados</h2>
        <Link className="text-primary-500 underline max-sm:self-end" href="#">
          Ver todos
        </Link>
      </div>
      <ul className="space-y-5">
        <li className="space-y-2 border-b pb-5 border-neutral-300">
          <p>
            <strong className="font-medium">Lorem ipsum</strong>{" "}
            <span className="text-accent-500">comprou</span> dolor sit amet
            consectetur adipisicing elit. Eius, iure! Voluptatibus modi enim
            commodi.
          </p>
          <div className="flex justify-between text-sm">
            <p className="text-text-100">20 de Fevereiro, 2023</p>
            <p className="text-text-200 font-medium">100.000kzs</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
