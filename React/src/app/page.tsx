import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "red", alignItems: "center" }}
        >
          <Toolbar sx={{ gap: 2 }}>
            <Image src="/santa-claus.png" alt="" width={50} height={50} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Kris Krindle
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          p: 2,
          gridTemplateColumns: "repeat(2, 1fr)",
          maxWidth: "90em",
          mx: 'auto'
        }}
      >
        <Card>
          <CardHeader title="Add the names" />
          <CardContent>
            <TextField id="outlined-basic" label="Name 1" variant="outlined" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Who has Who!!" />
        </Card>
      </Box>
    </>
  );
}
