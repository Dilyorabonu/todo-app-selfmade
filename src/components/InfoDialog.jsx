"use client";
import { useDispatch, useSelector } from "react-redux";
import { infoModalStateManager } from "@/lib/redux-toolkit/slices/modal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

function InfoDialog() {
  const { infoModalState } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const data = JSON.parse(
    typeof window !== "undefined" ? localStorage.getItem("taskData") : "{}"
  );
  return (
    <Dialog
      open={infoModalState}
      onOpenChange={() => dispatch(infoModalStateManager())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.todoName}</DialogTitle>
          <DialogDescription>{data.todoBody}</DialogDescription>
          <DialogDescription>
            <strong className="text-foreground">Holati:</strong>{" "}
            {data.completed ? "Bajarilgan" : "Bajarilmagan"}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default InfoDialog;
