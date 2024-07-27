"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteModalStateManager } from "@/lib/redux-toolkit/slices/modal";
import { removeTodo } from "@/lib/redux-toolkit/slices/tasks";
import { useDispatch, useSelector } from "react-redux";

function DeleteModal() {
  const dispatch = useDispatch();
  const { deleteModalState } = useSelector((state) => state.modal);
  function handleClick() {
    const id = localStorage.getItem("id");
    dispatch(removeTodo(id));
  }
  return (
    <AlertDialog
      open={deleteModalState}
      onOpenChange={() => dispatch(deleteModalStateManager())}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Ushbu topshiriqni rostan o'chirmoqchimisiz?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Siz agar topshiriqni o'chirib yuborsangiz uni qaytarishni iloji
            bo'lmaydi, o'ylab ish qiling
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>O'chirish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteModal;
