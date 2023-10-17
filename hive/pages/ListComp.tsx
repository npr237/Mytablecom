import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import { Checkbox, IconButton } from '@mui/material';
import { BiSort } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';

export interface ListCompProps{
    ListArr: any[];
    handleToggle: (value:string) => any
    checked: string[]
    handleColumnSort: (value:any) => void
    handleColumnFilter: (value:any) => void
  }
  const ListComp: React.FC<ListCompProps>  = ({ListArr, handleToggle, handleColumnSort, handleColumnFilter, checked}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',  maxHeight: 300, overflow: 'auto',}}>
      {ListArr.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <div>
              <IconButton edge="end" aria-label="comments" onClick={() => handleColumnSort(value)} sx={{color: value.isSort? 'none': 'lightblue'}}>
                <BiSort />
              </IconButton>
              <IconButton edge="end" aria-label="comments" sx={{marginLeft: '20px',color: value.isFilter? 'none': 'lightblue'}} onClick={() => handleColumnFilter(value)}>
              <FaFilter />
            </IconButton>
            </div>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)}>
              <ListItemIcon >
                <Checkbox
                  edge="start" 
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} style={{ fontWeight: 600,fontSize: "17px", color: "rgba(0, 0, 0, 0.54)" }}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  )
}

export default ListComp