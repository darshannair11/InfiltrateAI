import React from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

export default function StartScan() {
  const [type, setType] = React.useState("URL");
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state with the input value
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="new-scan-input-container">
      <div className="ip-text-container">
        <TextField fullWidth label="Enter the IP/ Domain Name" id="fullWidth" />
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            value={inputValue}
            onChange={handleInputChange}
          >
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"URL"}>URL</MenuItem>
            <MenuItem value={"IP"}>IP</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#062C30", height: "50px" }}
        endIcon={<SensorOccupiedIcon />}
      >
        Scan
      </Button>
    </div>
  );
}
