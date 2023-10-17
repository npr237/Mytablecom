// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Dialog,
//   DialogContent,
//   TextField,
//   DialogActions,
//   Button,
//   MenuItem,
//   Select,
// } from '@mui/material';
// import { FaFilter } from 'react-icons/fa';
// import { BiSort, BiSortDown, BiSortUp } from 'react-icons/bi';
// import { BsFunnel } from 'react-icons/bs';
// import axios from 'axios';
// import SearchBox from './SearchBox';
// import Datepickercomponent from './Datepickercomponent';
// // import CustomButton from 'components/CustomButton/Custombutton';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import ReusableSelect from '../../components/MultiSelect/MultiSelect';
// import ReusableIconSelect from '../../components/ReusableIconSelect/ReusableIconSelect';
// import Pagination from '../../components/Pagination/Pagination';

// // Added DataType to define the structure of the data
// type DataType = {
//   [key: string]: any; // Added index signature
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   startDate: Date; //  this matches the actual data type
// };

// const TablePage = () => {
//   const [data, setData] = useState<DataType[]>([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [showSort, setShowSort] = useState(false);
//   const [filterDialogOpen, setFilterDialogOpen] = useState(false);
//   const [filters, setFilters] = useState<Record<string, string>>({});
//   const [selectedColumn, setSelectedColumn] = useState('');
//   const [sort, setSort] = useState({ field: '', order: '' });
//   const [selectedOption, setSelectedOption] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [visibleColumns, setVisibleColumns] = useState<string[]>([]);
//   const [ShowGlobalHeader, setShowGlobalHeader] = useState<boolean>(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [personName, setPersonName] = useState<string[]>([]);

//   const [columnVisibility, setColumnVisibility] = useState<{
//     [key: string]: boolean;
//   }>({
//     id: true,
//     name: true,
//     email: true,
//     phone: true,
//   }); // Added index signature
//   const handleColumnVisibilityChange = (column: string | number) => {
//     setColumnVisibility((prev) => ({
//       ...prev,
//       [column]: !prev[column],
//     }));
//   };

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const getData = async () => {
//     await axios
//       .get('http://localhost:8000/employee')
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleSearch = (searchTerm: string) => {
//     setSearchInput(searchTerm);
//     if (searchTerm) {
//       const filteredData = data.filter((item) =>
//         columns.some((column) =>
//           String(item[column.id])
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//         )
//       );
//       setData(filteredData);
//     } else {
//       getData(); // Reset to the original data if the search term is empty.
//     }
//   };
//   const applyFilter = () => {
//     if (filters[selectedColumn]) {
//       const filteredData = data.filter((item) =>
//         String(item[selectedColumn])
//           .toLowerCase()
//           .includes(String(filters[selectedColumn]).toLowerCase())
//       );
//       setData(filteredData);
//     } else {
//       getData();
//     }
//     setFilterDialogOpen(false);
//   };

//   const clearAll = () => {
//     setFilters({});
//     setSort({ field: '', order: '' });
//     setShowFilter(false);
//     setShowSort(false);
//     setSearchInput('');
//     getData(); // To fetch the original unfiltered and unsorted data
//   };

//   const openFilterDialog = (columnId: React.SetStateAction<string>) => {
//     setSelectedColumn(columnId);
//     setFilterDialogOpen(true);
//   };

//   const handleSort = (columnId: string) => {
//     const newData = [...data];
//     const order =
//       sort.field === columnId && sort.order === 'asc' ? 'desc' : 'asc';

//     newData.sort((a, b) => {
//       if (a[columnId] < b[columnId]) return order === 'asc' ? -1 : 1;
//       if (a[columnId] > b[columnId]) return order === 'asc' ? 1 : -1;
//       return 0;
//     });

//     setSort({ field: columnId, order });
//     setData(newData);
//   };

//   const handleSelectChange = (e: { target: { value: string } }) => {
//     setShowFilter(e.target.value === 'Filter');
//     setShowSort(e.target.value === 'Sort');
//   };

//   const handleClick = () => {
//     setShowGlobalHeader(!ShowGlobalHeader);
//   };

//   // const name = [{name:'Sort', icon: 'S'}, {name:'Filter', icon: 'F'}]

//   const handleDateSearch = (fromDate: Date | null, toDate: Date | null) => {
//     if (fromDate && toDate) {
//       const filteredData = data.filter((item) => {
//         const startDate = new Date(item.startDate);
//         return startDate >= fromDate && startDate <= toDate;
//       });
//       setData(filteredData);
//     } else {
//       getData(); // If dates are not selected properly, reset to original data
//     }
//   };

//   const columns = [
//     { id: 'id', name: 'Id' },
//     { id: 'name', name: 'Name' },
//     { id: 'email', name: 'Email' },
//     { id: 'phone', name: 'Phone' },
//   ];
//   const optionColumns = columns.map((column) => ({
//     label: column.name,
//     value: column.id,
//   }));

//   return (
//     <>
//       <main>
//         <div style={{ width: '90%', margin: 'auto' }}>
//           <Datepickercomponent
//             onSearch={handleDateSearch}
//             disabled={ShowGlobalHeader}
//           />
//         </div>

//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '90%',
//             margin: 'auto',
//           }}
//         >
//           {/* <Selectsort onChange={handleSelectChange} /> */}
//           {/* <Button onClick={handleClick} variant="outlined">{!ShowGlobalHeader? "Show": "Hide"}</Button> */}

//           <ReusableIconSelect
//             label="Enable Sort & Filter"
//             options={optionColumns}
//             value={personName}
//             onChange={setPersonName}
//             disabled={ShowGlobalHeader}
//           />
//           <ReusableSelect
//             label="Select Column"
//             options={columns}
//             value={visibleColumns}
//             onChange={setVisibleColumns}
//             disabled={ShowGlobalHeader}
//           />
//           {/* <ClearAll clearAll={clearAll}/> */}
//           <SearchBox onSearch={handleSearch} isdisabled={ShowGlobalHeader} />
//           <CustomButton
//             onClick={handleClick}
//             variant="contained"
//             sx={{ height: '40px' }}
//           >
//             {ShowGlobalHeader ? 'Show' : 'Hide'}
//           </CustomButton>
//         </div>

//         <div style={{ textAlign: 'center', width: '90%', margin: 'auto' }}>
//           <h1>Table</h1>
//           <Paper>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     {columns.map((column) =>
//                       visibleColumns.includes(column.id) ? (
//                         <TableCell
//                           key={column.id}
//                           style={{ fontWeight: 'bold' }}
//                         >
//                           {personName.includes('Sort') && (
//                             <IconButton onClick={() => handleSort(column.id)}>
//                               {sort.field === column.id ? (
//                                 sort.order === 'asc' ? (
//                                   <BiSortUp />
//                                 ) : (
//                                   <BiSortDown />
//                                 )
//                               ) : (
//                                 <BiSort />
//                               )}
//                             </IconButton>
//                           )}
//                           {column.name}
//                           {personName.includes('Filter') && (
//                             <IconButton
//                               onClick={() => openFilterDialog(column.id)}
//                             >
//                               <BsFunnel />
//                             </IconButton>
//                           )}
//                         </TableCell>
//                       ) : null
//                     )}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {(rowsPerPage > 0
//                     ? data.slice(
//                         page * rowsPerPage,
//                         page * rowsPerPage + rowsPerPage
//                       )
//                     : data
//                   ).map((row, index) => (
//                     <TableRow key={index}>
//                       {columns.map((column) =>
//                         // columnVisibility[column.id]
//                         visibleColumns.includes(column.id) ? (
//                           <TableCell key={column.id}>
//                             {row[column.id]}
//                           </TableCell>
//                         ) : null
//                       )}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//               <Pagination
//                 page={page}
//                 onPageChange={handleChangePage}
//                 rowsPerPage={rowsPerPage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//                 totalCount={data.length}
//               />
//             </TableContainer>
//           </Paper>

//           <Dialog
//             open={filterDialogOpen}
//             onClose={() => setFilterDialogOpen(false)}
//           >
//             <DialogContent>
//               <Select
//                 value={selectedOption}
//                 onChange={(e) => setSelectedOption(e.target.value as string)} // Cast value to string
//                 fullWidth
//                 style={{ marginTop: '20px' }}
//               >
//                 <MenuItem value="start with">Starts With</MenuItem>
//                 <MenuItem value="ends with">Ends With</MenuItem>
//                 <MenuItem value="containes">Containes</MenuItem>
//                 <MenuItem value="option4">Equals</MenuItem>
//                 {/* ... add other options as required */}
//               </Select>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 label={`Filter by ${selectedColumn}`}
//                 type="text"
//                 fullWidth
//                 value={filters[selectedColumn] || ''}
//                 onChange={(e) =>
//                   setFilters({ ...filters, [selectedColumn]: e.target.value })
//                 }
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
//               <Button onClick={applyFilter}>Apply</Button>
//             </DialogActions>
//           </Dialog>
//         </div>
//       </main>
//     </>
//   );
// };

// export default TablePage;
