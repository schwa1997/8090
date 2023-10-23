'use client'

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const InfoCollector = () => {
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [weddingDate, setWeddingDate] = useState(new Date());
  const [weddingLocation, setWeddingLocation] = useState("");
  const [weddingSize, setWeddingSize] = useState("100");

  const handleWeddingDateChange = (date: any) => {
    setWeddingDate(date);
  };

  const handleInfoSubmit = () => {
    // Handle the submission of collected information
    console.log("Bride Name:", brideName);
    console.log("Groom Name:", groomName);
    console.log("Wedding Date:", weddingDate);
    console.log("Wedding Location:", weddingLocation);
    console.log("Wedding Size:", weddingSize);
  };

  return (
    <div className="w-1/2">
      <h2>Information Collector</h2>
      <form>
        <TextField
          label="Bride Name"
          variant="outlined"
          fullWidth
          value={brideName}
          onChange={(e:any) => setBrideName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Groom Name"
          variant="outlined"
          fullWidth
          value={groomName}
          onChange={(e:any) => setGroomName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Wedding Location"
          variant="outlined"
          fullWidth
          value={weddingLocation}
          onChange={(e:any) => setWeddingLocation(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Wedding Size"
          type="number"
          variant="outlined"
          fullWidth
          value={weddingSize}
          onChange={(e:any) => setWeddingSize(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Wedding Date"
          variant="outlined"
          fullWidth
          type="date"
          value={weddingDate.toISOString().split("T")[0]}
          onChange={(e:any) => handleWeddingDateChange(new Date(e.target.value))}
          margin="normal"
          InputProps={{
            startAdornment: (
              <CalendarTodayIcon color="action" fontSize="small" />
            ),
          }}
        />
        <Button variant="contained" color="primary" onClick={handleInfoSubmit} className="text-black">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default InfoCollector;
