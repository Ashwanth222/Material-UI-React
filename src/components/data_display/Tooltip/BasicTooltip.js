import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';


export default function BasicTooltip() {
    return (
        <Tooltip title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
            <Tooltip title="Add" arrow>
                <Button>Arrow</Button>
            </Tooltip>
        </Tooltip>
    );
}
