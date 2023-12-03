"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  const onClick = () => {
    execute({});
  };
  
  return (
    <Dialog
      open={proModal.isOpen}
      onOpenChange={proModal.onClose}
    >
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image
            src="/hero.svg"
            alt="Hero"
            className="object-cover"
            fill
          />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6 text-end">
          <h2 className="font-semibold text-xl">
           !עדכן/י עוד היום לפרימיום
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            חקור וגלה את הטוב ביותר בשבילך
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc direction-reverse text-end">
              <li>ללא הגבלת לוחות</li>
              <li>רשימות בדיקה מתקדמות</li>
              <li>אפשרויות ניהול ואבטחה </li>
              <li>...ועוד</li>
            </ul>
          </div>
          <Button
            disabled={isLoading}
            onClick={onClick}
            className="w-full"
            variant="primary"
          >
            שדרג/י
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};