import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationDemoProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPage: number;
  limit: number;
}

export function PaginationDemo({ currentPage, setCurrentPage, totalPage, limit }: PaginationDemoProps) {
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {/* Pages */}
        {[...Array(totalPage)].map((_, index) => {
          // {[...Array(totalPage)].map((_, index) index+1 => {
          const page = index + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                className="hover:cursor-pointer"
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}
            className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer "}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
