"use client";

import { Button } from "@/core-ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core-ui/select";
import { useGroup } from "@/hooks";
import { capitalizeMenuItemName } from "@/lib";
import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { SelectionContext } from "../shared-state/SelectionContext";

export const GroupPanel = ({
  selectedGroupId,
}: {
  selectedGroupId: number;
}) => {
  const { setSelectedGroupId } = useContext(SelectionContext);

  const { group, isError, isLoading } = useGroup({ selectedGroupId });
  const [selectedDiagramId, setSelectedDiagramId] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    setSelectedDiagramId(group?.diagrams?.[0]?.id);
  }, [group]);

  if (isLoading) return null;
  if (isError) return null;

  console.log(selectedDiagramId);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-2 text-left">
      <div className="flex w-full items-center justify-start gap-2">
        <Button variant={"ghost"} onClick={() => setSelectedGroupId(undefined)}>
          <ArrowBigLeft size={16} />
        </Button>
        <h1 className="text-xl font-semibold">{group.name}</h1>
      </div>
      <Select
        value={selectedDiagramId?.toString()}
        onValueChange={(value) => setSelectedDiagramId(Number(value))}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {group.diagrams?.map((diagram) => (
            <SelectItem key={diagram.id} value={diagram.id + ""}>
              {diagram.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {group.diagrams
        ?.filter((diagram) => diagram.id === selectedDiagramId)
        .map((diagram) => (
          <div key={diagram.id}>
            {diagram.img_url && (
              <div className="flex w-full justify-center">
                <Image
                  height={150}
                  width={150}
                  src={diagram.img_url}
                  alt="parts-diagram-photo"
                  layout="responsive"
                />
              </div>
            )}
            {/* Combined headers and parts grid */}
            <div className="grid grid-cols-4 gap-2 text-sm">
              {/* Headers */}
              <div className="col-span-2 font-semibold">Name</div>
              <div className="col-span-2 font-semibold">Number</div>
              {/* <div className="font-semibold">Amount</div> */}

              {/* Parts data */}
              {diagram?.parts
                ?.sort((a, b) => b.name.localeCompare(a.name))
                .map((part, i) => (
                  <React.Fragment key={diagram.name + "_part_" + i}>
                    <div className="col-span-2">
                      {capitalizeMenuItemName(part.name) || "N/A"}
                    </div>
                    <div className="col-span-2 break-all">{`${part.number.slice(0, 5)}-${part.number.slice(4, 8)}`}</div>
                    {/* <div>{part.amount}</div> */}
                  </React.Fragment>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};
