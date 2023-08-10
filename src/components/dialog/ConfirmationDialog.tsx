import * as AlertDialog from "@radix-ui/react-alert-dialog";
import classNames from "classnames";

type Props = {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonTitle?: string;
  open: boolean;
  dangerousAction?: boolean;
};

export default function ConfirmationDialog({
  title,
  description,
  onCancel,
  onConfirm,
  open,
  dangerousAction = false,
  confirmButtonTitle = "Confirmar",
}: Props) {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-50 data-[state=open]:animate-overlayShow" />
        <AlertDialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-10 shadow-xl focus:outline-none">
          <AlertDialog.Title className="m-0 text-lg leading-norma font-bold">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-4 mb-5 text-sm leading-normal">
            {description}
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Cancel asChild>
              <button
                type="button"
                onClick={onCancel}
                className="bg-neutral-300 py-2 px-4 rounded-md text-sm hover:bg-neutral-400 duration-300"
              >
                Cancelar
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                type="button"
                onClick={onConfirm}
                className={classNames(
                  "py-2 px-4 rounded-md text-sm duration-300",
                  dangerousAction
                    ? "bg-danger text-white hover:bg-opacity-60"
                    : "bg-primary-300 hover:bg-primary-400"
                )}
              >
                {confirmButtonTitle}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
