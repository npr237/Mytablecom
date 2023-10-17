// import {React} from 'react'
// import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// export default function Allviews() {
//   return (
//     <>
//         <Box className="all-view">
//             <Accordion className='cust-accordion'>
//                 <AccordionSummary
//                     expandIcon={<AddIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                     className='border-bottom cust-accordion-summary'
//                     sx={{padding: 0}}
//                 >
//                 <Typography component='h3' variant='h3' className='h3'>
//                     All Views
//                 </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className='cust-accordion-details'>
//                     <ProjectsTable />
//                 </AccordionDetails>
//             </Accordion>
//         </Box>
//     </>
//   )
// }

// function createData(aproject, vname, vbid, recce, estimate, porder, stransfer, pqc, iinvoice, transportation, installation, fqc, ireceipt) {
//     return { aproject, vname, vbid, recce, estimate, porder, stransfer, pqc, iinvoice, transportation, installation, fqc, ireceipt };
// }
  
// const rows = [
//     createData('3D-4CBS CUST FULL SHOP', 'First Touch PVT LTD', 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4),
//     createData('Ust Full Shop (Digital /Non Digital) PAN INDIA', 'Vendor 1', 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0),
//     createData('Cust Full Shop (Digital /Non Digital) PAN INDIA', 'Vendor 2', 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4),
//     createData('Cust Full Shop (Digital /Non Digital) PAN INDIA', 'Vendor 3', 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0),
//     createData('AMC SO Shop', 'Vendor 4', 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4),
// ];
  
// function ProjectsTable() {
//     return (
//         <TableContainer>
//             <Table size="small" id="active-projects" className='cust-table table-bordered stickyColTable' aria-label="a dense table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Active Projects</TableCell>
//                         <TableCell align="right">Vendor Name</TableCell>
//                         <TableCell align="right">Vendor Bid</TableCell>
//                         <TableCell align="right">Recce</TableCell>
//                         <TableCell align="right">Estimates</TableCell>
//                         <TableCell align="right">Purchase Order</TableCell>
//                         <TableCell align="right">Stock Transfer</TableCell>
//                         <TableCell align="right">Production & QC</TableCell>
//                         <TableCell align="right">Interim Invoice</TableCell>
//                         <TableCell align="right">Transportation</TableCell>
//                         <TableCell align="right">Installation</TableCell>
//                         <TableCell align="right">Final QC</TableCell>
//                         <TableCell align="right">Invoice Receipt</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {rows.map((row, index) => (
//                     <TableRow key={index}>
//                     <TableCell align="left" className='border-right-none'>{row.aproject}</TableCell>
//                     <TableCell align="center" className='border-left-none'>{row.vname}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.vbid}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.recce}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.estimate}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.porder}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.stransfer}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.pqc}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.iinvoice}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.transportation}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.installation}</TableCell>
//                     <TableCell align="right" className='border-inline-none'>{row.fqc}</TableCell>
//                     <TableCell align="right" className='border-left-none'>{row.ireceipt}</TableCell>
//                     </TableRow>
//                 ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }











import { React } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Allviews() {
  return (
    <>
      <Box className="all-view">
        <Accordion className="cust-accordion">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="border-bottom cust-accordion-summary"
            sx={{ padding: 0 }}
          >
            <Typography component="h3" variant="h3" className="h3">
              All Views
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="cust-accordion-details">
            <ProjectsTable />
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}

function createData(
  aproject,
  vname,
  vbid,
  recce,
  estimate,
  porder,
  stransfer,
  pqc,
  iinvoice,
  transportation,
  installation,
  fqc,
  ireceipt
) {
  return {
    aproject,
    vname,
    vbid,
    recce,
    estimate,
    porder,
    stransfer,
    pqc,
    iinvoice,
    transportation,
    installation,
    fqc,
    ireceipt,
  };
}

const rows = [
  createData(
    "3D-4CBS CUST FULL SHOP",
    "First Touch PVT LTD",
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4
  ),
  createData(
    "Ust Full Shop (Digital /Non Digital) PAN INDIA",
    "Vendor 1",
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0
  ),
  createData(
    "Cust Full Shop (Digital /Non Digital) PAN INDIA",
    "Vendor 2",
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4
  ),
  createData(
    "Cust Full Shop (Digital /Non Digital) PAN INDIA",
    "Vendor 3",
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    4,
    0
  ),
  createData("AMC SO Shop", "Vendor 4", 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4),
];

function ProjectsTable() {
  return (
    <TableContainer>
      <Table
        size="small"
        id="active-projects"
        className="cust-table table-bordered stickyColTable"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Active Projects</TableCell>
            <TableCell align="right">Vendor Name</TableCell>
            <TableCell align="right">Vendor Bid</TableCell>
            <TableCell align="right">Recce</TableCell>
            <TableCell align="right">Estimates</TableCell>
            <TableCell align="right">Purchase Order</TableCell>
            <TableCell align="right">Stock Transfer</TableCell>
            <TableCell align="right">Production & QC</TableCell>
            <TableCell align="right">Interim Invoice</TableCell>
            <TableCell align="right">Transportation</TableCell>
            <TableCell align="right">Installation</TableCell>
            <TableCell align="right">Final QC</TableCell>
            <TableCell align="right">Invoice Receipt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left" className="border-right-none">
                {row.aproject}
              </TableCell>
              <TableCell align="center" className="border-left-none">
                {row.vname}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.vbid}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.recce}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.estimate}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.porder}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.stransfer}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.pqc}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.iinvoice}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.transportation}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.installation}
              </TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.fqc}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.ireceipt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
