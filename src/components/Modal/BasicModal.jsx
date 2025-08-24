import { Box, Modal, Typography } from "@mui/material";

export const BasicModal = ({
  open,
  onClose,
  title,
  content,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      }}>
        <Typography variant="h6" id="modal-modal-title">{title}</Typography>
        <Typography variant="body1" id="modal-modal-description">{content}</Typography>
      </Box>
    </Modal>
  );
}
