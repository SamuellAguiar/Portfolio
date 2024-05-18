import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubButton = () => {
    return (
        <>
            <Stack direction="row" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',  
                underline: 'none',
                color:'f5f5f5' ,
            }}>
                <GitHubIcon />
                <Button style={{
                    color: '#ffffff', 
                    fontFamily:'Poppins',
                    fontSize: '12px',
                }}>Veja o código</Button>
            </Stack>
        </>
    )
}

export default GitHubButton;