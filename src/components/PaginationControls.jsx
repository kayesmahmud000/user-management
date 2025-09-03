'use client'
import { Button } from "@/components/ui/button"

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []
  const maxVisiblePages = 5
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }
  
  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
      >
        Previous
      </Button>
      
      {startPage > 1 && (
        <>
          <Button
            onClick={() => onPageChange(1)}
            variant="outline"
            size="sm"
          >
            1
          </Button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}
      
      {pageNumbers.map(page => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={currentPage === page ? "default" : "outline"}
          size="sm"
        >
          {page}
        </Button>
      ))}
      
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <Button
            onClick={() => onPageChange(totalPages)}
            variant="outline"
            size="xs"
          >
            {totalPages}
          </Button>
        </>
      )}
      
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        size="sm"
      >
        Next
      </Button>
    </div>
  )
}

export default PaginationControls