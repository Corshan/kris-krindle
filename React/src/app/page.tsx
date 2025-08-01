"use client";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

type KrisKrindle = {
  giftee: string,
  gifter: string
}

export default function Home() {
  const [inputFields, setInputFields] = useState([{ name: "" }]);
  const [results, setResults] = useState<KrisKrindle[]>([]);

  const handleInput = (
    idx: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    let names = [...inputFields];
    names[idx].name = event.target.value;
    setInputFields(names);
  };

  const addField = () => {
    let data = [...inputFields];
    data.push({ name: "" });
    setInputFields(data);
  };

  const removeField = () => {
    if (inputFields.length == 1) return;

    let data = [...inputFields];
    data.pop();
    setInputFields(data);
  };

  const generateKrisKrindle = () => {
    let data = [...inputFields];

    if (data.length <= 2) return;

    const shuffledData = data
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value.name);

    const pairings = shuffledData.map((a, idx) => {
      return {
        gifter: a,
        giftee: shuffledData[(idx + 1) % shuffledData.length],
      };
    });

    setResults(pairings);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "#ff5252", alignItems: "center" }}
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
          mx: "auto",
        }}
      >
        <Card>
          <CardHeader title="Add the names" />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "20em",
                overflowY: "auto",
                padding: 2,
              }}
            >
              {inputFields.map((value, idx) => {
                return (
                  <TextField
                    id="outlined-basic"
                    key={idx}
                    label={"Name " + (idx + 1)}
                    value={value.name}
                    variant="outlined"
                    onChange={(e) => handleInput(idx, e)}
                  />
                );
              })}
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Fab
                size="small"
                aria-label="add"
                color="success"
                onClick={addField}
              >
                <AddIcon />
              </Fab>
              <Fab
                size="small"
                aria-label="remove"
                color="error"
                onClick={removeField}
              >
                <RemoveIcon />
              </Fab>
            </Box>
            <Button variant="contained" onClick={generateKrisKrindle}>Generate</Button>
          </CardActions>
        </Card>
        <Card>
          <CardHeader title="Who has Who!!" />
          <CardContent>
            {results.map((value, idx) => {
              return <Typography>{value.gifter} has {value.giftee}</Typography>;
            })}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
