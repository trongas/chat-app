import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Custom style for the root container to ensure full height and proper scroll behavior.
const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
}));

// Customizing SimpleBar's appearance using styled from MUI.
const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 4, // Adjust width for a thinner scrollbar
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 2, // Adjust height for the horizontal scrollbar
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  '& .simplebar-placeholder': {
    height: '0 !important',
  },
}));

// Defining prop types for better validation.
Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

// Main Scrollbar Component
export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  // Check if the user is on a mobile device.
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    // Use native scrolling for better performance on mobile.
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  // Use custom SimpleBar scrolling on desktop for a better appearance.
  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}

export { SimpleBarStyle };
