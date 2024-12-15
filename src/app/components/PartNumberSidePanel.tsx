import { PartNumberData } from "@/data";
import { Button } from "@/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/ui/sheet";
import { Dispatch, SetStateAction } from "react";

export function PartNumberSidePanel({
  selectedPartNumber,
  setSelectedPartNumber,
}: {
  selectedPartNumber: string | undefined;
  setSelectedPartNumber: Dispatch<SetStateAction<string | undefined>>;
}) {
  const part = PartNumberData.find((part) => part.partNumber === selectedPartNumber);
  return (
    <Sheet open={!!selectedPartNumber} onOpenChange={() => setSelectedPartNumber(undefined)}>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <h1>{part?.label}</h1>
            <h3 className="text-sm">{`Part Number: ${part?.partNumber}`}</h3>
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="text-white">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
