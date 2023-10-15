import {
  BadgeCheckIcon,
  FileTextIcon,
  HourglassIcon,
  MessageCircleIcon,
} from "lucide-react";

export default async function DashboardTopAnalytics() {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-7 ">
      <div className="px-7 py-8 bg-white rounded flex items-center">
        <div className="space-y-2 flex-1">
          <h2 className="text-text-100">Serviços Oferecidos</h2>
          <p className="font-bold text-3xl">25</p>
        </div>
        <div className="relative">
          <FileTextIcon size={40} className="text-accent-500 z-10 relative" />
          <div className="absolute -right-3 -bottom-2 bg-accent-100 w-10 h-10 rounded-full" />
        </div>
      </div>
      <div className="px-7 py-8 bg-white rounded flex items-center">
        <div className="space-y-2 flex-1">
          <h2 className="text-text-100">Actividades Completadas</h2>
          <p className="font-bold text-3xl">1292</p>
        </div>
        <div className="relative">
          <BadgeCheckIcon size={40} className="text-accent-500 z-10 relative" />
          <div className="absolute -right-3 -bottom-2 bg-accent-100 w-10 h-10 rounded-full" />
        </div>
      </div>
      <div className="px-7 py-8 bg-white rounded flex items-center">
        <div className="space-y-2 flex-1">
          <h2 className="text-text-100">Actividades em Espera</h2>
          <p className="font-bold text-3xl">25</p>
        </div>
        <div className="relative">
          <HourglassIcon size={40} className="text-accent-500 z-10 relative" />
          <div className="absolute -right-3 -bottom-2 bg-accent-100 w-10 h-10 rounded-full" />
        </div>
      </div>
      <div className="px-7 py-8 bg-white rounded flex items-center">
        <div className="space-y-2 flex-1">
          <h2 className="text-text-100">Total de Comentários</h2>
          <p className="font-bold text-3xl">22.768</p>
        </div>
        <div className="relative">
          <MessageCircleIcon
            size={40}
            className="text-accent-500 z-10 relative"
          />
          <div className="absolute -right-3 -bottom-2 bg-accent-100 w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
