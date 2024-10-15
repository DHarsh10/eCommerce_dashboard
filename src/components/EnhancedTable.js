import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import PaginationButtons from "./PaginationButtons";
import useTheme from "../contexts/themeContext";

import {
    actAvatar1,
    actAvatar2,
    actAvatar3,
    actAvatar4,
    actAvatar5,
    CalendarBlank,
    CalendarBlankDark
} from '../utils/assets/svgs/index'

const rows = [
    { orderId : '#CM9801', userName: "Natali Craig", project: "Landing Page", address: "Nest Lane Olivette", date: "Yesterday", status: 'submitted', userImg: actAvatar1 },
    { orderId : '#CM9802', userName: "Andi Lane", project: "CRM Admin pages", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: 'submitted', userImg: actAvatar2 },
    { orderId : '#CM9803', userName: "Orlando Diggs", project: "Client Project", address: "Larry San Francisco", date: "A minute ago", status: 'submitted', userImg: actAvatar3 },
    { orderId : '#CM9804', userName: "Drew Cano", project: "Admin Dashboard", address: "Meadow Lane Oakland", date: "Just now", status: 'submitted', userImg: actAvatar4 },
    { orderId : '#CM9805', userName: "Kate Morrison", project: "App Landing Page", address: "Bagwell Avenue Ocala", date: "Yesterday", status: 'submitted', userImg: actAvatar5 },
    { orderId : '#CM9806', userName: "Natali Craig", project: "Admin Dashboard", address: "Larry San Francisco", date: "A minute ago", status: 'submitted', userImg: actAvatar4 },
    { orderId : '#CM9807', userName: "Orlando Diggs", project: "Landing Page", address: "Nest Lane Olivette", date: "1 hour ago", status: 'submitted', userImg: actAvatar3 },
    { orderId : '#CM9808', userName: "Drew Cano", project: "Admin Dashboard", address: "Larry San Francisco", date: "Just now", status: 'submitted', userImg: actAvatar2 },
    { orderId : '#CM9809', userName: "Kate Morrison", project: "Client Project", address: "Meadow Lane Oakland", date: "Yesterday", status: 'submitted', userImg: actAvatar1 },
    { orderId : '#CM98010', userName: "Andi Lane", project: "Client Project", address: "Bagwell Avenue Ocala", date: "Just now", status: 'submitted', userImg: actAvatar5 },
    { orderId : '#CM98011', userName: "Orlando Diggs", project: "Landing Page", address: "Nest Lane Olivette", date: "A minute ago", status: 'submitted', userImg: actAvatar2 },
    { orderId : '#CM98012', userName: "Kate Morrison", project: "Admin Dashboard", address: "Meadow Lane Oakland", date:"1 hour ago", status: 'submitted', userImg: actAvatar4 },
    { orderId : '#CM98013', userName: "Drew Cano", project: "Client Project", address: "Nest Lane Olivette", date: "Yesterday", status: 'submitted', userImg: actAvatar5 },
    { orderId : '#CM98014', userName: "Andi Lane", project: "Landing Page", address: "Bagwell Avenue Ocala", date: "Just now", status: 'submitted', userImg: actAvatar1 },
    { orderId : '#CM98015', userName: "Orlando Diggs", project: "Client Project", address: "Meadow Lane Oakland", date: "A minute ago", status: 'submitted', userImg: actAvatar3 },
];

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("userName");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(6);

const rowsPerPage = 6

  const { theme } = useTheme();
  const currentTheme = theme === "light";

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <>
      <EnhancedTableToolbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.orderId );
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.orderId )}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.orderId }
                    selected={isItemSelected}
                    className="dashboardTable"
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, row.orderId )}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.orderId }
                    </TableCell>
                    <TableCell align="left"><div className="flex items-center gap-3"><span><img src={row.userImg} alt="" className="w-[1.667vw]"/></span><span>{row.userName}</span></div> </TableCell>
                    <TableCell align="left">{row.project}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left"><div className="flex items-center gap-2"><span><img src={currentTheme ? CalendarBlank : CalendarBlankDark } alt="" className="w-[1.111vw]"/></span><span>{row.date}</span></div></TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationButtons
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        count={rows.length}
      />
    </>
  );
}

export default EnhancedTable;
