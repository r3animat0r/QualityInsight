import React from "react";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

export default function PredictionExplanation() {
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
        <Select labelId="demo-simple-select-label" label="Select Feature">
          <MenuItem value={0}>Feature 1</MenuItem>
          <MenuItem value={1}>Feature 2</MenuItem>
          <MenuItem value={2}>Feature 3</MenuItem>
          <MenuItem value={3}>Feature 4</MenuItem>
          <MenuItem value={4}>Feature 5</MenuItem>
          <MenuItem value={5}>Feature 6</MenuItem>
          <MenuItem value={6}>Feature 7</MenuItem>
          <MenuItem value={7}>Feature 8</MenuItem>
          <MenuItem value={8}>Feature 9</MenuItem>
        </Select>
      </FormControl>
      <Typography
        component="span"
        variant="body1"
        classes={{ body1: "content" }}
      >
        <p>
          <b>Full feature name: wikitext.revision.headings_by_level(2)</b>
        </p>
        <p>
          This feature describes the number of sections in an article. In
          Wikipedia, these are the 2nd level headings.
        </p>
        <p>More sections influence the prediction positively.</p>
        <p>Example: “1 History”,”2 Geography”, “3 Demographics”</p>
      </Typography>
    </div>
  );
}
