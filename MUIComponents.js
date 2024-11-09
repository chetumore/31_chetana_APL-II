import React from 'react';
import {
    Accordion, AccordionSummary, AccordionDetails,
    Menu, MenuItem,
    Rating,
    Divider,
    SpeedDial, SpeedDialAction, SpeedDialIcon,
    Breadcrumbs, Link,
    Chip,
    Typography, Box, IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function MUIComponents() {
    // State for Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // SpeedDial Actions
    const actions = [
        { icon: <FavoriteIcon />, name: 'Favorite' },
        { icon: <ShareIcon />, name: 'Share' },
        { icon: <SettingsIcon />, name: 'Settings' },
    ];

    return (
        <Box sx={{ padding: 2 }}>
            {/* Breadcrumbs Example */}
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link underline="hover" color="inherit" href="/getting-started/installation/">
                    Components
                </Link>
                <Typography color="text.primary">MUI Demo</Typography>
            </Breadcrumbs>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Accordion Example */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details section of the first accordion. You can place any content here.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details section of the second accordion.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Menu Example */}
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Rating Example */}
            <Typography component="legend">Rate our Service</Typography>
            <Rating name="service-rating" defaultValue={3} />

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Chip Example */}
            <Chip label="Clickable Chip" onClick={() => alert('Chip clicked!')} />
            <Chip label="Deletable Chip" onDelete={() => alert('Chip deleted!')} />

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* SpeedDial Example */}
            <Box sx={{ position: 'relative', height: 320 }}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => alert(`${action.name} clicked!`)}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </Box>
    );
}

export default MUIComponents;
