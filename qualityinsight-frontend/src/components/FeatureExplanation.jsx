import React from "react";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import Features from "./text-assets/features.json";

export default function PredictionExplanation() {
  let [feaExpl, setFeaExpl] = React.useState("");
  let [fullFeatureName, setFullFeatureName] = React.useState("");
  let [example, setExample] = React.useState("");

  return (
    <div>
      <FormControl
        variant="outlined"
        size="small"
        fullWidth="true"
        margin="normal"
        hiddenLabel="true"
        classes={{ root: "feature-selection" }}
      >
        <InputLabel id="demo-simple-select-label">Select Feature</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Select Feature"
          onChange={(ev) => {
            console.log(ev.target.value);
            setFeaExpl(Features[ev.target.value].explanation);
            setFullFeatureName(Features[ev.target.value].fullFeatureName);
            setExample(Features[ev.target.value].example);
          }}
        >
          {Object.keys(Features).map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography
        component="span"
        variant="body1"
        classes={{ body1: "content" }}
      >
        <p>
          <b>Full feature name:</b> {fullFeatureName}
        </p>
        <pre className="preText">{feaExpl}</pre>
        <pre className="preText">
          <b>Example:</b> {example}
        </pre>
      </Typography>
    </div>
  );
}
