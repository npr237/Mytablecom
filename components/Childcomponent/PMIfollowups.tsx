// import {React} from 'react'
// import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// export default function PMIfollowups() {
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
//                     PMI Follow Ups
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

// function createData(aproject, vname, recce, estimates) {
//     return { aproject, vname, recce, estimates };
// }
  
// const row = [
//     createData('3D-4CBS(CUST FULL SHOP)', 'Vendor 1', 4, 0),
//     createData('3D-4CBS(CUST FULL SHOP)', 'Vendor 2', '-', 70),
//     createData('3D-4CBS(CUST FULL SHOP)', 'Vendor 3', '-', 70),
//     createData('3D-4CBS(CUST FULL SHOP)', 'Vendor 4', 0, 77),
// ];
  
// function ProjectsTable() {
//     return (
//         <TableContainer>
//             <Table size="small" id='table' className='cust-table table-bordered' aria-label="a dense table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Active Projects</TableCell>
//                         <TableCell>Vendor Name</TableCell>
//                         <TableCell align="right">Recce</TableCell>
//                         <TableCell align="right">Estimates</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {row.map((row, index) => (
//                     <TableRow key={index}>
//                         <TableCell className='border-right-none'>{row.aproject}</TableCell>
//                         <TableCell className='border-inline-none'>{row.vname}</TableCell>
//                         <TableCell align="right" className='border-inline-none'>{row.estimates}</TableCell>
//                         <TableCell align="right" className='border-left-none'>{row.recce}</TableCell>
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

export default function PMIfollowups() {
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
              PMI Follow Ups
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

function createData(aproject, vname, recce, estimates) {
  return { aproject, vname, recce, estimates };
}

const row = [
  createData("3D-4CBS(CUST FULL SHOP)", "Vendor 1", 4, 0),
  createData("3D-4CBS(CUST FULL SHOP)", "Vendor 2", "-", 70),
  createData("3D-4CBS(CUST FULL SHOP)", "Vendor 3", "-", 70),
  createData("3D-4CBS(CUST FULL SHOP)", "Vendor 4", 0, 77),
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
            <TableCell>Active Projects</TableCell>
            <TableCell>Vendor Name</TableCell>
            <TableCell align="right">Recce</TableCell>
            <TableCell align="right">Estimates</TableCell>
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
                {row.estimates}
              </TableCell>
              <TableCell align="right" className="border-left-none">
                {row.recce}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
