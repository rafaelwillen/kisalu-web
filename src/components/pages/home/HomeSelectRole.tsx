import { homeSearchSelectRole } from "@/utils/constants/selectOptions";
import { CaretDown, Check } from "@phosphor-icons/react";
import * as Select from "@radix-ui/react-select";

export default function HomeSelectRole() {
  return (
    <Select.Root>
      <Select.Trigger className="flex items-center justify-between w-full outline-none">
        <Select.Value placeholder="Selecione um papel" />
        <Select.Icon>
          <CaretDown weight="fill" className="text-text-200" size={20} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="overflow-hidden bg-white rounded-md shadow-lg w-[--radix-select-trigger-width]"
          position="popper"
          sideOffset={30}
        >
          <Select.Viewport className="p-1">
            {homeSearchSelectRole.map(({ label, value }) => (
              <Select.Item
                value={value}
                key={value}
                className="flex items-center py-2 pr-8 pl-6 relative select-none outline-none hover:bg-primary-600 hover:text-white cursor-pointer duration-100"
              >
                <Select.ItemText>{label}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-6">
                  <Check size={20} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
