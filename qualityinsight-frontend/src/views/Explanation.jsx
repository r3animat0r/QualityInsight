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

export default function FoundArticles() {
  const [predOpen, setPredOpen] = React.useState(false);
  const [feaOpen, setFeaOpen] = React.useState(false);

  return (
    <div id="content-exp">
      <div className="head space-between">
        <div>
          <Button classes={{ root: "back-button" }} variant="contained">
            Back to revision selection
          </Button>
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
                              Revisions
                            </Typography>
                            <Typography variant="body2" align="left">
                              Revisions are article updates. <br></br>
                              They are sorted by time with the most current
                              revision on top. Only the ten latest revisions are
                              possible to choose.
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
              Hi
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
                Hi
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
                                Revisions
                              </Typography>
                              <Typography variant="body2" align="left">
                                Revisions are article updates. <br></br>
                                They are sorted by time with the most current
                                revision on top. Only the ten latest revisions
                                are possible to choose.
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
                Hi
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
