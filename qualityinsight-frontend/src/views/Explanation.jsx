import "./Explanation.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Prediction from "../components/Prediction";
import PredictionExplanation from "../components/PredictionExplanation";
import FeatureExplanation from "../components/FeatureExplanation";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function FoundArticles() {
  const [predOpen, setPredOpen] = React.useState(false);
  const [feaOpen, setFeaOpen] = React.useState(false);

  const [results, setResults] = useState();
  let history = useHistory();
  let location = useLocation();
  let articleName = new URLSearchParams(location.search).get("article");
  let revid = new URLSearchParams(location.search).get("revid");

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/explanation?article=" +
          articleName +
          "&revid=" +
          revid
      )
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="content-exp">
      <div className="head">
        <Button
          onClick={() => {
            history.goBack();
          }}
          classes={{ root: "back-button" }}
          variant="contained"
        >
          Back to revision selection
        </Button>
        <div className="revision-info">
          <Typography variant="overline">Article Quality Prediction</Typography>
          <Typography classes={{ root: "revision-title" }} variant="subtitle1">
            You are currently viewing the prediction for the article{" "}
            {articleName} with the Revision ID {revid}
          </Typography>
        </div>
      </div>
      <div className="flex-container">
        <div id="visual" className="card">
          <Card variant="outlined" classes={{ root: "visual-card" }}>
            <CardContent classes={{ root: "card-content" }}>
              <div className="head-flex">
                <Typography variant="h6" classes={{ root: "card-typo" }}>
                  Visualization of the prediction
                </Typography>
                <div className="whatis-vis">
                  <div className="text">What is a prediction?</div>
                  <ClickAwayListener onClickAway={() => setPredOpen(false)}>
                    <div className="icon">
                      <Tooltip
                        classes={{ popper: "help-yellow" }}
                        title={
                          <React.Fragment>
                            <Typography variant="h6" align="left">
                              Predictions
                            </Typography>
                            <Typography variant="body2" align="left">
                              The prediction is made with the ORES article
                              quality model of the english Wikipedia. <br></br>
                              The displayed probabilities for the shown grades
                              are calculated using the feature values. There is
                              a graph for every grade created with{" "}
                              <a
                                href="https://github.com/marcotcr/lime"
                                target="_blank"
                              >
                                LIME
                              </a>{" "}
                              to explain how the feature values affect the
                              prediction.
                            </Typography>
                          </React.Fragment>
                        }
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={() => setPredOpen(false)}
                        open={predOpen}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        interactive
                      >
                        <IconButton
                          onClick={() => setPredOpen(true)}
                          size="small"
                        >
                          <HelpIcon
                            classes={{ root: "help-icon-yellow" }}
                            fontSize="large"
                          />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </ClickAwayListener>
                </div>
              </div>
              <Divider classes={{ root: "card-divider-yellow" }} />
              {!results ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress classes={{ root: "loading-yellow" }} />{" "}
                  Calculating... This can take up to two minutes.
                </div>
              ) : (
                <Prediction
                  figures={results.fig}
                  featureValues={results.featureValues}
                  prediction={results.prediction}
                />
              )}
            </CardContent>
          </Card>
        </div>
        <div className="flex-container-vert">
          <div id="expl-pred" className="card">
            <Card variant="outlined" classes={{ root: "expl-card" }}>
              <CardContent classes={{ root: "card-content" }}>
                <Typography variant="h6" classes={{ root: "card-typo" }}>
                  Explanation of the prediction
                </Typography>
                <Divider classes={{ root: "card-divider-green" }} />
                {!results ? (
                  <CircularProgress classes={{ root: "loading-green" }} />
                ) : (
                  <PredictionExplanation
                    results={results.prediction}
                    revid={revid}
                    tables={results.tables}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div id="feature" className="card">
            <Card variant="outlined" classes={{ root: "feature-card" }}>
              <CardContent classes={{ root: "card-content" }}>
                <div className="head-flex">
                  <Typography variant="h6" classes={{ root: "card-typo" }}>
                    Explaining features
                  </Typography>
                  <div className="whatis-fea">
                    <div className="text">What is a feature?</div>
                    <ClickAwayListener onClickAway={() => setFeaOpen(false)}>
                      <div className="icon">
                        <Tooltip
                          classes={{ popper: "help-blue" }}
                          title={
                            <React.Fragment>
                              <Typography variant="h6" align="left">
                                Features
                              </Typography>
                              <Typography variant="body2" align="left">
                                They are used to calculate the prediction.{" "}
                                <br></br>
                                Each feature represents a characteristics of the
                                article. There are 25 features in total for the
                                articlequality model used in the english
                                Wikipedia. These features are used in
                                calculations for the prediction.
                              </Typography>
                            </React.Fragment>
                          }
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => setFeaOpen(false)}
                          open={feaOpen}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          interactive
                        >
                          <IconButton
                            onClick={() => setFeaOpen(true)}
                            size="small"
                          >
                            <HelpIcon
                              classes={{ root: "help-icon-blue" }}
                              fontSize="large"
                            />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                  </div>
                </div>
                <Divider classes={{ root: "card-divider-blue" }} />
                <FeatureExplanation />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
