import {Box} from "@mui/material";

export default function MyBox() {

    return <Box
        sx={{
            width: 100,
            height: 100,
            margin: '2px',
            backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
        }}
    />;
}
