import "./Explanation.css";
import React from "react";

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

export default function FoundArticles() {
  const [predOpen, setPredOpen] = React.useState(false);
  const [feaOpen, setFeaOpen] = React.useState(false);

  return (
    <div id="content-exp">
      <div className="head">
        <Button classes={{ root: "back-button" }} variant="contained">
          Back to revision selection
        </Button>
        <div className="revision-info">
          <Typography variant="overline">Article Quality Prediction</Typography>
          <Typography classes={{ root: "revision-title" }} variant="subtitle1">
            You are currently viewing the prediction for the article Free
            University of Berlin with the Revision ID 1027689158
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
                              The prediciton is made with the ORES article
                              quality model. <br></br>
                              The displayed probabilities for the shown grades
                              are calculated using the feature values. There is
                              a graph for every grade.
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
              <Prediction />
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
                <PredictionExplanation />
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
                                Wikipedia.
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
