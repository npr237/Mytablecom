// import {React} from 'react'
// import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// export default function Vendorfallowups() {
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
//                     Vendor Follow Ups
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

// function createData(aproject, vname, rdue, roverdue, ddue, doverdue, edue, eoverdue, pdue, poverdue, idue, ioverdue) {
//     return { aproject, vname, rdue, roverdue, ddue, doverdue, edue, eoverdue, pdue, poverdue, idue, ioverdue};
// }
  
// const row = [
//     createData('3D-4CBS(CUST FULL SHOP)', 'Vendor 1', '-', '-', '-', '-', '-', '-', '-', '-', '-', 4),
//     createData('Cust Full Shop (Digital /Non Digital) PAN INDIA', 'Vendor 2', 217, '-'),
//     createData('Cust Full Shop (Digital /Non Digital) PAN INDIA', 'Vendor 2', 217, '-'),
//     createData('Cust Full Shop (Digital /Non Digital) PAN INDIA', 'Vendor 2', 217, '-'),
// ];
  
// function ProjectsTable() {
//     return (
//         <TableContainer>
//             <Table size="small" id='table' className='cust-table table-bordered' aria-label="a dense table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell rowSpan={2}>Active Projects</TableCell>
//                         <TableCell rowSpan={2}>Vendor Name</TableCell>
//                         <TableCell align="center" colSpan={2}>Recce Report</TableCell>
//                         <TableCell align="center" colSpan={2}>3D Design</TableCell>
//                         <TableCell align="center" colSpan={2}>Estimates</TableCell>
//                         <TableCell align="center" colSpan={2}>Production</TableCell>
//                         <TableCell align="center" colSpan={2}>Invoice</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell className='border-top-none border-left-none'>Due</TableCell>
//                         <TableCell className='border-top-none'>Overdue</TableCell>
//                         <TableCell className='border-top-none'>Due</TableCell>
//                         <TableCell className='border-top-none'>Overdue</TableCell>
//                         <TableCell className='border-top-none'>Due</TableCell>
//                         <TableCell className='border-top-none'>Overdue</TableCell>
//                         <TableCell className='border-top-none'>Due</TableCell>
//                         <TableCell className='border-top-none'>Overdue</TableCell>
//                         <TableCell className='border-top-none'>Due</TableCell>
//                         <TableCell className='border-top-none'>Overdue</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {row.map((row, index) => (
//                     <TableRow key={index}>
//                         <TableCell className='border-right-none'>{row.aproject}</TableCell>
//                         <TableCell className='border-inline-none'>{row.vname}</TableCell>
//                         <TableCell align="right" className='border-inline-none'>{row.rdue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.roverdue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.ddue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.doverdue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.edue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.eoverdue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.pdue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.poverdue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.idue}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.ioverdue}</TableCell>
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

export default function Vendorfallowups() {
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
              Vendor Follow Ups
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
  rdue,
  roverdue,
  ddue,
  doverdue,
  edue,
  eoverdue,
  pdue,
  poverdue,
  idue,
  ioverdue
) {
  return {
    aproject,
    vname,
    rdue,
    roverdue,
    ddue,
    doverdue,
    edue,
    eoverdue,
    pdue,
    poverdue,
    idue,
    ioverdue,
  };
}

const row = [
  createData(
    "3D-4CBS(CUST FULL SHOP)",
    "Vendor 1",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    4
  ),
  createData(
    "Cust Full Shop (Digital /Non Digital) PAN INDIA",
    "Vendor 2",
    217,
    "-"
  ),
  createData(
    "Cust Full Shop (Digital /Non Digital) PAN INDIA",
    "Vendor 2",
    217,
    "-"
  ),
  createData(
    "Cust Full Shop (Digital /Non Digital) PAN INDIA",
    "Vendor 2",
    217,
    "-"
  ),
];

function ProjectsTable() {
  return (
    <TableContainer>
      <Table
        size="small"
        id="table"
        className="cust-table table-bordered"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2}>Active Projects</TableCell>
            <TableCell rowSpan={2}>Vendor Name</TableCell>
            <TableCell align="center" colSpan={2}>
              Recce Report
            </TableCell>
            <TableCell align="center" colSpan={2}>
              3D Design
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Estimates
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Production
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Invoice
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-top-none border-left-none">
              Due
            </TableCell>
            <TableCell className="border-top-none">Overdue</TableCell>
            <TableCell className="border-top-none">Due</TableCell>
            <TableCell className="border-top-none">Overdue</TableCell>
            <TableCell className="border-top-none">Due</TableCell>
            <TableCell className="border-top-none">Overdue</TableCell>
            <TableCell className="border-top-none">Due</TableCell>
            <TableCell className="border-top-none">Overdue</TableCell>
            <TableCell className="border-top-none">Due</TableCell>
            <TableCell className="border-top-none">Overdue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="border-right-none">
                {row.aproject}
              </TableCell>
              <TableCell className="border-inline-none">{row.vname}</TableCell>
              <TableCell align="right" className="border-inline-none">
                {row.rdue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.roverdue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.ddue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.doverdue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.edue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.eoverdue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.pdue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.poverdue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.idue}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.ioverdue}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
