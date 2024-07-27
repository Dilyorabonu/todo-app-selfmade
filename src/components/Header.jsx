// src/components/Header.jsx
"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import { useDispatch } from "react-redux";
import { todoModalOpenStateManager } from "@/lib/redux-toolkit/slices/modal";

export default function Header() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(todoModalOpenStateManager());
  }

  return (
    <header className="shadow-sm py-5">
      <div className="container flex items-center justify-between px-5">
        <span className="block font-medium">Todo app</span>
        <Button onClick={handleClick} variant="outline">
          Vazifa qo'shish
          <PlusIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </header>
  );
}
