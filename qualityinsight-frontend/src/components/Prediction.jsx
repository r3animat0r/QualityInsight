import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

import LinearProgress from "@material-ui/core/LinearProgress";

import TabProb from "../test/tab-prob.png";
import TabFeat from "../test/tab-feat.png";
import Graph from "../test/graph.png";

/**
 *
 * @param {Object} props
 * @param {string} props.figures
 * @param {string} props.tables
 * @param {Object} props.prediction
 * @returns
 */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Prediction(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="prediction-content">
      <div className="prediction-tables flex-container">
        <div className="prediction-prob">
          <Tooltip
            classes={{ popper: "tip" }}
            title={
              <React.Fragment>
                Stub, Start, C, B, GA and FA are grades that the english
                Wikipedia uses for
                <a
                  href="https://en.wikipedia.org/wiki/Wikipedia:Content_assessment"
                  target="_blank"
                  rel="noreferrer"
                >
                  Content assessment
                </a>
                . The grade with the highest probability is the predicited
                grade.
              </React.Fragment>
            }
            placement="bottom-end"
            interactive
          >
            <div className="probabilities">
              {Object.keys(props.prediction.probability).map((key) => (
                <>
                  <div className="space-between">
                    <span>{key}</span>
                    <span>
                      {Math.round(props.prediction.probability[key] * 100) /
                        100}
                    </span>
                  </div>

                  <LinearProgress
                    classes={{ root: "probBar" }}
                    variant="determinate"
                    value={props.prediction.probability[key] * 100}
                  />
                </>
              ))}
            </div>
          </Tooltip>
        </div>
        <div className="prediction-feat">
          <Tooltip
            classes={{ popper: "tip" }}
            title={
              <React.Fragment>
                This table lists the features and their values. The features are
                sorted based on their influence on the prediction, which means
                how much weight they have in the calculation.
              </React.Fragment>
            }
            placement="bottom-end"
            interactive
          >
            <img src={TabFeat} alt="tab-prob" style={{ width: "400px" }} />
          </Tooltip>
        </div>
      </div>
      <div className="prediction-graphs">
        <Paper
          classes={{ root: "full-tab" }}
          elevation={0}
          variant="outlined"
          square
        >
          <Tabs
            classes={{ root: "full-tab-style" }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab classes={{ root: "tab-style" }} label="Stub" />
            <Tab classes={{ root: "tab-style" }} label="Start" />
            <Tab classes={{ root: "tab-style" }} label="C" />
            <Tab classes={{ root: "tab-style" }} label="B" />
            <Tab classes={{ root: "tab-style" }} label="GA" />
            <Tab classes={{ root: "tab-style" }} label="Fa" />
          </Tabs>
        </Paper>
        <TabPanel classes={{ root: "tab-content" }} value={value} index={0}>
          <Tooltip
            classes={{ popper: "tip" }}
            title="This diagram displays how the features affect the outcome of the prediction. If the feature bar goes to the right, that means the feature increases the probability for the grade in question. If it goes the other way, the feature decreases the probability for that grade. The bigger the bar and the more influence has the feature on the prediction. The numbers next to the bar is the percentage of influence."
            placement="right-end"
          >
            <img
              src={"data:image/png;base64," + props.figures[5]}
              alt="tab-prob"
              style={{ width: "500px" }}
            />
          </Tooltip>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tooltip
            classes={{ popper: "tip" }}
            title="This diagram displays how the features affect the outcome of the prediction. If the feature bar goes to the right, that means the feature increases the probability for the grade in question. If it goes the other way, the feature decreases the probability for that grade. The bigger the bar and the more influence has the feature on the prediction. The numbers next to the bar is the percentage of influence."
            placement="right-end"
          >
            <img
              src={"data:image/png;base64," + props.figures[4]}
              alt="tab-prob"
              style={{ width: "500px" }}
            />
          </Tooltip>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Tooltip
            classes={{ popper: "tip" }}
            title="This diagram displays how the features affect the outcome of the prediction. If the feature bar goes to the right, that means the feature increases the probability for the grade in question. If it goes the other way, the feature decreases the probability for that grade. The bigger the bar and the more influence has the feature on the prediction. The numbers next to the bar is the percentage of influence."
            placement="right-end"
          >
            <img
              src={"data:image/png;base64," + props.figures[1]}
              alt="tab-prob"
              style={{ width: "500px" }}
            />
          </Tooltip>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Tooltip
            classes={{ popper: "tip" }}
            title="This diagram displays how the features affect the outcome of the prediction. If the feature bar goes to the right, that means the feature increases the probability for the grade in question. If it goes the other way, the feature decreases the probability for that grade. The bigger the bar and the more influence has the feature on the prediction. The numbers next to the bar is the percentage of influence."
            placement="right-end"
          >
            <img
              src={"data:image/png;base64," + props.figures[0]}
              alt="tab-prob"
              style={{ width: "500px" }}
            />
          </Tooltip>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Tooltip
            classes={{ popper: "tip" }}
            title="This diagram displays how the features affect the outcome of the prediction. If the feature bar goes to the right, that means the feature increases the probability for the grade in question. If it goes the other way, the feature decreases the probability for that grade. The bigger the bar and the more influence has the feature on the prediction. The numbers next to the bar is the percentage of influence."
            placement="right-end"
          >
            <img
              src={"data:image/png;base64," + props.figures[3]}
              alt="tab-prob"
              style={{ width: "500px" }}
            />
          </Tooltip>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Tooltip
            classes={{ popper: "tip" }}
            title="This diagram displays how the features affect the outcome of the prediction. If the feature bar goes to the right, that means the feature increases the probability for the grade in question. If it goes the other way, the feature decreases the probability for that grade. The bigger the bar and the more influence has the feature on the prediction. The numbers next to the bar is the percentage of influence."
            placement="right-end"
          >
            <img
              src={"data:image/png;base64," + props.figures[2]}
              alt="tab-prob"
              style={{ width: "500px" }}
            />
          </Tooltip>
        </TabPanel>
      </div>
    </div>
  );
}
