import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { AddTourTypeModal } from "@/components/modules/Admin/TourType/AddTourTypeModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetTourTypesQuery, useRemoveTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);
  const [removeTourType] = useRemoveTourTypeMutation();

  const handleRemoveTourType = async (tourId: string) => {
    const toastId = toast.loading("Removing");
    try {
      const res = await removeTourType(tourId).unwrap();

      if (res.success) {
        toast.success("Tour removed successfully", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data?.data);
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal />
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: { _id: string; name: string }, idx: number) => (
              <TableRow key={idx}>
                <TableCell className="font-medium w-full">{item?.name}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button className="cursor-pointer">
                      <Edit2 />
                    </Button>

                    <DeleteConfirmation onConfirm={() => handleRemoveTourType(item._id)}>
                      <Button className="cursor-pointer">
                        <Trash2 />
                      </Button>
                    </DeleteConfirmation>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddTourType;
