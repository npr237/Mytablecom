// import React from 'react'
// import { Box, Typography, Paper, Stack } from '@mui/material';
// import GridViewIcon from '@mui/icons-material/GridView';
// import Popover from '@mui/material/Popover';

// export default function Workcategories() {

//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handlePopoverOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handlePopoverClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);
//     return (
//         <Box className='work-categories' sx={{ marginBottom: '20px' }}>
//             <Typography component='h3' variant='h3' className='h3 border-bottom' sx={{ marginBottom: '20px', paddingBottom: '10px' }}>
//                 Work Categories
//             </Typography>
//             <Box className='box-view'>
//                 <Paper className='box'>
//                     <Box>
//                         <GridViewIcon className='box-icon' />
//                         <Typography
//                         >All View</Typography>
//                         <Typography component='span' variant='span'>2</Typography>

//                         <Popover
//                             id="mouse-over-popover"
//                             className='workcategory-popup'
//                             sx={{
//                                 pointerEvents: 'none',
//                                 marginTop: '60.5px',
//                                 borderRadius:'0 !important',
//                                 zIndex:'0'
//                             }}
//                             open={open}
//                             anchorEl={anchorEl}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'center',
//                             }}
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'center',
//                             }}
//                             onClose={handlePopoverClose}
//                             disableRestoreFocus
//                         >
//                             <Typography sx={{ p: 1 }}>
//                                 My To do's
//                                 <Stack direction='row'>
//                                     <Typography>Review & Sign off

//                                     </Typography>
//                                     <Typography>
//                                         Creation
//                                     </Typography>
//                                 </Stack>
                                
//                             </Typography>
//                         </Popover>
//                     </Box>
//                 </Paper>
//                 <Paper className='box'>
//                     <Box>
//                         <GridViewIcon className='box-icon' />
//                         <Typography

//                             aria-owns={open ? 'mouse-over-popover' : undefined}
//                             aria-haspopup="true"
//                             onMouseEnter={handlePopoverOpen}
//                             onMouseLeave={handlePopoverClose}

//                         >My To do's</Typography>
//                         <Typography component='span' variant='span'>2</Typography>
//                     </Box>
//                 </Paper>
//             </Box>
//         </Box>
//     )
// }










'use client'

import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import Popover from "@mui/material/Popover";

export default function Workcategories() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box className="work-categories" sx={{ marginBottom: "20px" }}>
      <Typography
        component="h3"
        variant="h3"
        className="h3 border-bottom"
        sx={{ marginBottom: "20px", paddingBottom: "10px" }}
      >
        Work Categories
      </Typography>
      <Box className="box-view">
        <Paper className="box">
          <Box>
            <GridViewIcon className="box-icon" />
            <Typography>All View</Typography>
            <Typography component="span" variant="span">
              2
            </Typography>

            <Popover
              id="mouse-over-popover"
              className="workcategory-popup"
              sx={{
                pointerEvents: "none",
                marginTop: "60.5px",
                borderRadius: "0 !important",
                zIndex: "0",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                My To do's
                <Stack direction="row">
                  <Typography>Review & Sign off</Typography>
                  <Typography>Creation</Typography>
                </Stack>
              </Typography>
            </Popover>
          </Box>
        </Paper>
        <Paper className="box">
          <Box>
            <GridViewIcon className="box-icon" />
            <Typography
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              My To do's
            </Typography>
            <Typography component="span" variant="span">
              2
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
