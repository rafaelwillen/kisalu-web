import DangerButton from "@/components/buttons/DangerButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function CategoryActions() {
  return (
    <div className="py-4 flex gap-4 items-center">
      <PrimaryButton disabled>Editar</PrimaryButton>
      <DangerButton disabled>Eliminar</DangerButton>
    </div>
  );
}
