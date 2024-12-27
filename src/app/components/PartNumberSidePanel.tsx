import { Lc100OverviewPartsModel } from "@/data";
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

// const Carousel = ({ urls }: { urls: string[] }) => {
//   // State variable for managing zoomed image
//   const [zoomedImage, setZoomedImage] = useState<string | undefined>();
//   // Function to open zoomed image
//   const openZoomedImage = (imageUrl: string) => {
//     setZoomedImage(imageUrl);
//   };
//   // Function to close zoomed image
//   const closeZoomedImage = () => {
//     setZoomedImage(undefined);
//   };
//   return (
//     <div className="relative h-60 cursor-zoom-in">
//       {/* Render the images */}
//       {urls.map((url, i) => (
//         <div key={url + i} onClick={() => openZoomedImage(url)}>
//           <Image
//             src={url}
//             alt="image"
//             layout="fill"
//             objectFit="cover"
//             unoptimized
//             className="static"
//           />
//         </div>
//       ))}
//       {/* Render the zoomed image */}
//       {zoomedImage && (
//         <button className="zoomed-image-container" onClick={closeZoomedImage}>
//           <Image
//             src={zoomedImage}
//             alt="zoomed-image"
//             layout="fill"
//             objectFit="contain"
//             unoptimized
//           />
//         </button>
//       )}
//     </div>
//   );
// };

export function PartNumberSidePanel({
  selectedPartNumber,
  setSelectedPartNumber,
}: {
  selectedPartNumber: string | undefined;
  setSelectedPartNumber: Dispatch<SetStateAction<string | undefined>>;
}) {
  const part =
    Lc100OverviewPartsModel[0].parts.find(
      (part) => part.number.toLowerCase() === selectedPartNumber?.split("_")[0]?.toLowerCase(),
    ) ??
    Lc100OverviewPartsModel[1].parts.find(
      (part) => part.number.toLowerCase() === selectedPartNumber?.split("_")[0]?.toLowerCase(),
    ) ??
    Lc100OverviewPartsModel[2].parts.find(
      (part) => part.number.toLowerCase() === selectedPartNumber?.split("_")[0]?.toLowerCase(),
    ) ??
    Lc100OverviewPartsModel[3].parts.find(
      (part) => part.number.toLowerCase() === selectedPartNumber?.split("_")[0]?.toLowerCase(),
    );

  return (
    <Sheet open={!!selectedPartNumber} onOpenChange={() => setSelectedPartNumber(undefined)}>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <span>{part?.name}</span>
          </SheetTitle>
          <SheetDescription>
            Part Number: <b>{part?.number}</b>
          </SheetDescription>

          {/* {part?.oldPartNumbers && (
            <SheetDescription>
              Previous Numbers: <b>{part?.oldPartNumbers.toString()}</b>
            </SheetDescription>
          )} */}
          {/* {part?.links && (
            <div className="flex min-h-fit max-w-full flex-col overflow-hidden text-wrap">
              <p>Links:</p>
              {part?.links.map((link) => <a href={`${link}`}>{link.substring(0, 31)}</a>)}
            </div>
          )} */}

          {/* {part?. && part?.imageUrls?.length > 0 && (
            <Carousel
              urls={[
                "https://partsouq.com/assets/tesseract/assets/global/TOYOTA00/source/53/536403B.gif",
              ]}
            />
          )} */}
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
