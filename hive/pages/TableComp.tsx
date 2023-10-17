'use client';

import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchBox from './SearchBox';
import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import { BiSort } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Datepickercomponent from './Datepickercomponent';
import SortIcon from '@mui/icons-material/Sort';
import { FcDataConfiguration } from 'react-icons/fc';
import KeepMountedModal from './CustomModal';
// import '../styles/appbar.scss'
import '../styles/global.css';

//MY COMP

import CustomButton from 'components/CustomButton/CustomButton';
import ListComp from './ListComp';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiSortDown, BiSortUp } from 'react-icons/bi';
import { BsFunnel } from 'react-icons/bs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import { FaSnowflake, FaSun } from 'react-icons/fa';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
interface DataItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  designation: string;
  pincode: string;
  startDate: string;
  [key: string]: any;
}

const name = [
  { name: 'Sort', icon: <BiSort /> },
  { name: 'Filter', icon: <FaFilter /> },
];

const TableComp = () => {
  // const [data, setData] = useState([]);
  const [data, setData] = useState<DataItem[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  // const [filters, setFilters] = useState({});
  const [filters, setFilters] = useState<Record<string, string>>({});

  const [selectedColumn, setSelectedColumn] = useState('');
  const [sort, setSort] = useState({ field: '', order: '' });
  const [selectedOption, setSelectedOption] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [visibleColumns, setVisibleColumns] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ShowGlobalHeader, setShowGlobalHeader] = useState<boolean>(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [personName, setPersonName] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [frozenColumns, setFrozenColumns] = useState<string[]>([]);
  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const [editingData, setEditingData] = useState<any>({}); // Change 'any' to the

  const [columnsOrder, setColumnsOrder] = useState<string[]>([]);

  const [column2, setColumn2] = useState([
    { id: 'id', name: 'Id', isSort: true, isFilter: true },
    { id: 'name', name: 'Name', isSort: true, isFilter: true, isFrozen: false },
    {
      id: 'email',
      name: 'Email',
      isSort: true,
      isFilter: true,
      isFrozen: false,
    },
    {
      id: 'phone',
      name: 'Phone',
      isSort: true,
      isFilter: true,
      isFrozen: false,
    },
    {
      id: 'address',
      name: 'Address',
      isSort: true,
      isFilter: true,
      isFrozen: false,
    },
    {
      id: 'designation',
      name: 'Designation',
      isSort: true,
      isFilter: true,
      isFrozen: false,
    },
    {
      id: 'pincode',
      name: 'pincode',
      isSort: true,
      isFilter: true,
      isFrozen: false,
    },
    { id: 'actions', name: 'Actions', isSort: true, isFilter: true },
  ]);

  const [columnVisibility, setColumnVisibility] = useState({
    id: true,
    name: true,
    email: true,
    phone: true,
  });

  const [checked, setChecked] = useState<string[]>([]);

  const toggleFrozen = (columnId: string) => {
    setFrozenColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (checked.includes(value)) {
      newChecked.splice(currentIndex, 1);
    } else {
      newChecked.push(value);
    }
    setChecked(newChecked);
    setVisibleColumns(newChecked);

    // console.log('checked', value)
    console.log('checked', newChecked);
  };

  console.log('564', column2);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    { id: 'id', name: 'Id' },
    { id: 'name', name: 'Name' },
    { id: 'email', name: 'Email' },
    { id: 'phone', name: 'Phone' },
    { id: 'address', name: 'Address' },
    { id: 'designation', name: 'Designation' },
    { id: 'pincode', name: 'pincode' },
    { id: 'actions', name: 'Actions' },
  ];

  const getData = async () => {
    await axios
      .get('http://localhost:8000/employee')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchInput(searchTerm);
    if (searchTerm) {
      const filteredData = data.filter((item) =>
        columns.some((column) => {
          const value = item[column.id];
          return (
            value &&
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
      setData(filteredData);
    } else {
      getData(); // Reset to the original data if the search term is empty.
    }
  };

  const applyFilter = () => {
    if (filters[selectedColumn]) {
      const filteredData = data.filter((item) =>
        String(item[selectedColumn])
          .toLowerCase()
          .includes(String(filters[selectedColumn]).toLowerCase())
      );
      setData(filteredData);
    } else {
      getData();
    }
    setFilterDialogOpen(false);
  };

  const clearAll = () => {
    setFilters({});
    setSort({ field: '', order: '' });
    setShowFilter(false);
    setShowSort(false);
    setSearchInput('');
    getData(); // To fetch the original unfiltered and unsorted data
  };

  const openFilterDialog = (columnId: React.SetStateAction<string>) => {
    setSelectedColumn(columnId);
    setFilterDialogOpen(true);
  };

  const handleSort = (columnId: string) => {
    const newData = [...data];
    const order =
      sort.field === columnId && sort.order === 'asc' ? 'desc' : 'asc';

    newData.sort((a, b) => {
      if (a[columnId] < b[columnId]) return order === 'asc' ? -1 : 1;
      if (a[columnId] > b[columnId]) return order === 'asc' ? 1 : -1;
      return 0;
    });

    setSort({ field: columnId, order });
    setData(newData);
  };

  const handleClick = () => {
    setShowGlobalHeader(!ShowGlobalHeader);
  };

  // const name = [{name:'Sort', icon: 'S'}, {name:'Filter', icon: 'F'}]

  console.log('sorted column', visibleColumns);

  const handleDateSearch = (fromDate: Date | null, toDate: Date | null) => {
    if (fromDate && toDate) {
      const filteredData = data.filter((item) => {
        const startDate = new Date(item.startDate); // No error here after adding the DataItem interface
        return startDate >= fromDate && startDate <= toDate;
      });
      setData(filteredData);
    } else {
      getData(); // If dates are not selected properly, reset to original data
    }
  };

  const handleColumnSort = (value: { id: string; isSort: any }) => {
    const updatedData = column2.map((item) => {
      if (item.id === value.id) {
        return {
          ...item,
          isSort: !value.isSort,
        };
      }
      return item;
    });
    setColumn2(updatedData);
  };

  const handleColumnFilter = (value: { id: string; isFilter: any }) => {
    const updatedData = column2.map((item) => {
      if (item.id === value.id) {
        return {
          ...item,
          isFilter: !value.isFilter,
        };
      }
      console.log('item', item);
      return item;
    });
    setColumn2(updatedData);
    console.log(column2);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(column2);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setColumn2(items);
  };

  // const toggleFrozen = (columnId: string) => {
  //   setFrozenColumns((prev) =>
  //     prev.includes(columnId)
  //       ? prev.filter((id) => id !== columnId)
  //       : [...prev, columnId]
  //   );
  // };

  return (
    <>
      {/* Header Section */}

      <div>
        <Datepickercomponent
          onSearch={handleDateSearch}
          disabled={ShowGlobalHeader}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SearchBox onSearch={handleSearch} isdisabled={ShowGlobalHeader} />
        <div>
          <IconButton onClick={() => setOpen(true)} disabled={ShowGlobalHeader}>
            {/* <FcDataConfiguration /> */}
            <GiSettingsKnobs />
          </IconButton>
          <CustomButton
            onClick={handleClick}
            variant="contained"
            sx={{ height: '40px', marginLeft: '20px' }}
          >
            {ShowGlobalHeader ? 'Show' : 'Hide'}
          </CustomButton>
        </div>
      </div>

      {/* Grid Section */}

      <div
        style={{ textAlign: 'center', overflowX: 'auto', marginTop: '10px' }}
      >
        <Paper>
          <TableContainer style={{ maxWidth: '100%' }}>
            <Table style={{ minWidth: 'max-content' }}>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="columns" direction="horizontal">
                  {(provided) => (
                    <TableHead
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <TableRow>
                        {column2.map((column, index) =>
                          visibleColumns.includes(column.id) ? (
                            !frozenColumns.includes(column.id) &&
                            column.id !== 'id' &&
                            column.id !== 'actions' ? (
                              <Draggable
                                key={column.id}
                                draggableId={column.id}
                                index={index}
                              >
                                {(provided) => (
                                  <TableCell
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    //  style={{ fontWeight: "bold", textAlign: 'center', fontSize: "17px", color: "rgba(0, 0, 0, 0.54)" }}
                                    key={column.id}
                                    className={
                                      column.id === 'actions'
                                        ? 'actionsColumn'
                                        : column.id === 'id'
                                        ? 'idColumn'
                                        : ''
                                    }
                                    style={{
                                      ...provided.draggableProps.style, // spread the styles to keep the existing styles
                                      fontWeight: 'bold',
                                      textAlign: 'center',
                                      fontSize: '17px',
                                      color: 'rgba(0, 0, 0, 0.54)',
                                      position:
                                        column.id === 'id' ||
                                        column.id === 'actions'
                                          ? 'sticky'
                                          : 'unset',
                                      top: 0,
                                      zIndex: 1,
                                      backgroundColor: '#fff', // To cover the content when scrolling
                                    }}
                                  >
                                    {column.isSort && (
                                      <IconButton
                                        onClick={() => handleSort(column.id)}
                                      >
                                        {sort.field === column.id ? (
                                          sort.order === 'asc' ? (
                                            <BiSortUp />
                                          ) : (
                                            <BiSortDown />
                                          )
                                        ) : (
                                          <BiSort />
                                        )}
                                      </IconButton>
                                    )}
                                    {column.name}
                                    {column.isFilter && (
                                      <IconButton
                                        onClick={() =>
                                          openFilterDialog(column.id)
                                        }
                                      >
                                        <BsFunnel />
                                      </IconButton>
                                    )}

                                    {/* <IconButton onClick={() => toggleFrozen(column.id)}>
    {frozenColumns.includes(column.id) ? <FaSnowflake /> : <FaSun />} 
  </IconButton> */}
                                    {/* <IconButton
                                      onClick={() => toggleFrozen(column.id)}
                                    >
                                      {frozenColumns.includes(column.id) ? (
                                        <FaSnowflake />
                                      ) : (
                                        <FaSun />
                                      )}
                                    </IconButton> */}
                                  </TableCell>
                                )}
                              </Draggable>
                            ) : (
                              <TableCell
                                key={column.id}
                                style={{
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                  fontSize: '17px',
                                  color: 'rgba(0, 0, 0, 0.54)',
                                  position: 'sticky',
                                  zIndex: 1,
                                  left: column.id === 'id' ? 0 : 'auto',
                                  right: column.id === 'actions' ? 0 : 'auto',
                                  backgroundColor: '#fff',
                                }}
                              >
                                {(column.isSort || column.id === 'id') && (
                                  <IconButton
                                    onClick={() => handleSort(column.id)}
                                  >
                                    {sort.field === column.id ? (
                                      sort.order === 'asc' ? (
                                        <BiSortUp />
                                      ) : (
                                        <BiSortDown />
                                      )
                                    ) : (
                                      <BiSort />
                                    )}
                                  </IconButton>
                                )}
                                {column.name}
                                {(column.isFilter || column.id === 'id') && (
                                  <IconButton
                                    onClick={() => openFilterDialog(column.id)}
                                  >
                                    <BsFunnel />
                                  </IconButton>
                                )}
                                <IconButton
                                  onClick={() => toggleFrozen(column.id)}
                                >
                                  {/* {frozenColumns.includes(column.id) ? (
                                    <FaSnowflake />
                                  ) : (
                                    <FaSun />
                                  )} */}
                                </IconButton>
                              </TableCell>
                            )
                          ) : null
                        )}
                        {provided.placeholder}
                      </TableRow>
                    </TableHead>
                  )}
                </Droppable>

                <TableBody>
                  {(rowsPerPage > 0
                    ? data.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : data
                  ).map((row, index) => (
                    <TableRow key={index}>
                      {column2.map((column) =>
                        visibleColumns.includes(column.id) ? (
                          <TableCell
                            key={column.id}
                            className={
                              column.id === 'actions'
                                ? 'actionsColumn'
                                : column.id === 'id'
                                ? 'idColumn'
                                : ''
                            }
                            style={{
                              position:
                                column.id === 'id' || column.id === 'actions'
                                  ? 'sticky'
                                  : 'unset',
                              zIndex: 1,
                              left: column.id === 'id' ? 0 : 'auto',
                              right: column.id === 'actions' ? 0 : 'auto',
                              backgroundColor: '#fff',
                            }}
                          >
                            {column.id === 'actions' ? (
                              <>
                                <IconButton className="edit-button">
                                  <EditIcon />
                                </IconButton>
                                <IconButton className="view-button">
                                  <VisibilityIcon />
                                </IconButton>
                                <IconButton className="delete-button">
                                  <DeleteIcon />
                                </IconButton>
                              </>
                            ) : (
                              row[column.id]
                            )}
                          </TableCell>
                        ) : null
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </DragDropContext>
            </Table>
            <Pagination
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              totalCount={data.length}
            />
          </TableContainer>
        </Paper>

        <Dialog
          open={filterDialogOpen}
          onClose={() => setFilterDialogOpen(false)}
        >
          <DialogContent>
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              fullWidth
              style={{ marginTop: '20px' }} // added some margin for spacing
            >
              <MenuItem value="start with">Starts With</MenuItem>
              <MenuItem value="ends with">Ends With</MenuItem>
              <MenuItem value="containes">Containes</MenuItem>
              <MenuItem value="option4">Equals</MenuItem>
              {/* ... add other options as required */}
            </Select>
            <TextField
              autoFocus
              margin="dense"
              label={`Filter by ${selectedColumn}`}
              type="text"
              fullWidth
              value={filters[selectedColumn] || ''}
              onChange={(e) =>
                setFilters({ ...filters, [selectedColumn]: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
            <Button onClick={applyFilter}>Apply</Button>
          </DialogActions>
        </Dialog>

        {/* List Modal */}

        <KeepMountedModal open={open} setOpen={setOpen}>
          <ListComp
            ListArr={column2}
            handleColumnSort={handleColumnSort}
            handleColumnFilter={handleColumnFilter}
            handleToggle={handleToggle}
            checked={checked}
          />
        </KeepMountedModal>
      </div>
    </>
  );
};

export default TableComp;
