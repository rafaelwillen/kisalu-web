import {
  BoxSelect,
  Briefcase,
  Camera,
  Car,
  Code,
  Droplets,
  Edit3,
  Eraser,
  Paintbrush,
  Presentation,
  School,
  Unplug,
  Utensils,
} from "lucide-react";

type Props = {
  slug: string;
};

export default function PopularCategoryIconSelector({ slug }: Props) {
  const className = "text-primary-600 relative category-bg-icon";
  const size = 40;
  switch (slug) {
    case "desenvolvimento-de-software":
      return <Code size={size} className={className} />;

    case "alimentacao-e-culinaria":
      return <Utensils size={size} className={className} />;

    case "consultoria-de-negocios":
      return <Briefcase size={size} className={className} />;

    case "design-e-criacao":
      return <Paintbrush size={size} className={className} />;

    case "educacao-e-tutoria":
      return <School size={size} className={className} />;

    case "encanamento-e-hidraulica":
      return <Droplets size={size} className={className} />;

    case "fotografia":
      return <Camera size={size} className={className} />;

    case "instalacao-e-manutencao-electrica":
      return <Unplug size={size} className={className} />;

    case "limpeza-e-organizacao":
      return <Eraser size={size} className={className} />;

    case "marketing-digital":
      return <Presentation size={size} className={className} />;

    case "mecanica-e-manutencao-automotiva":
      return <Car size={size} className={className} />;

    case "redacao-e-traducao":
      return <Edit3 size={size} className={className} />;
    default:
      return <BoxSelect size={size} className={className} />;
  }
}
