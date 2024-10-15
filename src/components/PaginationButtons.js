import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

function PaginationButtons({ page, onChangePage, rowsPerPage, count }) {
  return (
    <Stack spacing={2} className="items-end py-3 pagination-table">
      <Pagination
        count={Math.ceil(count / rowsPerPage)}
        page={page + 1}
        onChange={(event, newPage) => onChangePage(event, newPage - 1)}
        shape="rounded"
      />
    </Stack>
  );
}

export default PaginationButtons;
