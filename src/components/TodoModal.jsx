// src/components/TodoModal.jsx
"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { todoModalOpenStateManager } from "@/lib/redux-toolkit/slices/modal";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { getFormData } from "@/lib/utils";
import { addTodo } from "@/lib/redux-toolkit/slices/tasks";
import { toast } from "sonner";

export default function TodoModal() {
  const dispatch = useDispatch();
  const { todoModalOpenState } = useSelector((state) => state.modal);
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    // data.completed ? (data.completed = true) : (data.completed = false);

    // console.log(data);

    if (data.completed) {
      data.completed = true;
    } else {
      data.completed = false;
    }

    // Set id
    data.id = crypto.randomUUID();

    dispatch(addTodo(data));
    toast.success("Topshiriq muvaffaqiyatli qo'shildi");
    dispatch(todoModalOpenStateManager());
  }

  return (
    <Dialog
      open={todoModalOpenState}
      onOpenChange={() => dispatch(todoModalOpenStateManager())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Yangi topshiriq qo'shish</DialogTitle>
          <DialogDescription>
            Inputlarni to'g'ri to'ldiring va topshiriqlarni qo'shing.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="todoName">Topshiriq nomi*</Label>
            <Input
              type="text"
              id="todoName"
              placeholder="Topshiriq nomini kiriting"
              required
              name="todoName"
              autoComplete="off"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Topshiriq uchun izoh</Label>
            <Textarea
              placeholder="Topshiriq haqida to'liq ma'lumot yozishingiz mumkin"
              id="todoBody"
              name="todoBody"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="completed" name="completed" />
            <Label htmlFor="completed">Topshiriq bajarilganmi?</Label>
          </div>
          <DialogFooter>
            <Button>Tasdiqlash</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
