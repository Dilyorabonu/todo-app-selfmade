import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { InfoCircledIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useDispatch } from "react-redux";
import {
  deleteModalStateManager,
  infoModalStateManager,
} from "@/lib/redux-toolkit/slices/modal";

export default function TodoCard({ todoName, todoBody, completed, id }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{todoName}</CardTitle>
        <CardDescription className="whitespace-pre-wrap line-clamp-2">
          {todoBody !== "" ? todoBody : "..."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Holati: {completed ? "✅" : "❌"}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-3">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon">
                <Pencil2Icon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tahrirlash</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  localStorage.setItem(
                    "taskData",
                    JSON.stringify({ todoName, todoBody, completed })
                  );
                  dispatch(infoModalStateManager());
                }}
                variant="secondary"
                size="icon"
              >
                <InfoCircledIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ma'lumot olish</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  localStorage.setItem("id", id);
                  dispatch(deleteModalStateManager());
                }}
                variant="destructive"
                size="icon"
              >
                <TrashIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>O'chirish</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
