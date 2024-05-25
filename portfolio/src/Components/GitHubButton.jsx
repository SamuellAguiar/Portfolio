import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from '@mui/material';

const GitHubButton = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#f5f5f5',
        flexDirection: isSmallScreen ? 'column' : 'row',
    };

    const buttonStyle = {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: isSmallScreen ? '10px' : '12px',
        marginTop: isSmallScreen ? '5px' : '0',
    };

    return (
        <Stack direction="row" style={containerStyle}>
            <GitHubIcon />
            <Button style={buttonStyle}>
                Veja o código
            </Button>
        </Stack>
    );
}

export default GitHubButton;
