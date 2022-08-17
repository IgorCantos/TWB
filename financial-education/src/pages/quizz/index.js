import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Quizz = () => {
  const [progress, setProgress] = useState(0);

  const buttons = ["Botão 1", "Botão 2", "Botão 3", "Botão 4"];

  useEffect(() => {
    if (progress < 100) setTimeout(() => setProgress(progress + 10), 1000);
  });

  return (
    <Box>
      <Box bgcolor="#EDEDED">
        <Grid container>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" value={progress} />
            <Box textAlign="center">
              <Typography variant="body3">Questão 8/10</Typography>
              <Typography variant="h6" fontWeight="bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis laoreet sem, id accumsan nisl molestie?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <Grid container>
            {buttons.map((text) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={text}
                sx={{ textAlign: "center", padding: "15px" }}
              >
                <Button variant="contained">{text}</Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Quizz;
