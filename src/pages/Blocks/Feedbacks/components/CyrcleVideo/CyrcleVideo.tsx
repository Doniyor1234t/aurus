import { Box, IconButton, Fade } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import { useRef, useState } from "react";

export const CircularVideoComponent = ({ src, size = { xs: "280px", md: "380px" }, poster }: { src: string; size?: object; poster?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
      onClick={handlePlayPause}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      <Fade in={showControls || !isPlaying} timeout={300}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              width: 64,
              height: 64,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.1)',
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
          >
            {isPlaying ? (
              <Pause sx={{ fontSize: 32, color: '#333' }} />
            ) : (
              <PlayArrow sx={{ fontSize: 32, color: '#333', ml: 0.5 }} />
            )}
          </IconButton>
        </Box>
      </Fade>
    </Box>
  );
};