import { AddTourTypeModal } from "@/components/modules/Admin/TourType/AddTourTypeModel";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetTourTypesQuery } from "@/redux/features/Tour/tour.api";
import { Edit2, Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);
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
            {data?.data?.map((item: { name: string }, idx: number) => (
              <TableRow key={idx}>
                <TableCell className="font-medium w-full">{item?.name}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button className="cursor-pointer">
                      <Edit2 />
                    </Button>
                    <Button className="cursor-pointer">
                      <Trash2 />
                    </Button>
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
