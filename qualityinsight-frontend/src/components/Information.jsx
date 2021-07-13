import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function Information() {
  return (
    <div id="qi-info" className="card">
      <Card variant="outlined" classes={{ root: "qi-card" }}>
        <CardContent classes={{ root: "card-content" }}>
          <Typography variant="h6" classes={{ root: "card-typo" }}>
            Quality Insight
          </Typography>
          <Divider classes={{ root: "card-divider-green" }} />
          <Typography
            component="span"
            variant="body1"
            classes={{ body1: "content" }}
          >
            <p>
              Articles on Wikipedia are rated and receive a grade (Stub, Start,
              C, B, GA, FA). This tool will explain grading of articles and on
              what they are based on, making it more transparent what an article
              might be lacking or what makes it so good.
            </p>
            <p>
              The Visualizations are made with LIME. LIME stands for Local
              Interpretable Model-Agnostic Explanations and it can uncover what
              happens inside Machine Learning models.
            </p>
          </Typography>
        </CardContent>
      </Card>
      <div className="flex-container">
        <div id="ores-info" className="card">
          <Card variant="outlined" classes={{ root: "ores-card" }}>
            <CardContent classes={{ root: "card-content" }}>
              <Typography variant="h6" classes={{ root: "card-typo" }}>
                ORES
              </Typography>
              <Divider classes={{ root: "card-divider-blue" }} />
              <Typography
                component="span"
                variant="body1"
                classes={{ body1: "content" }}
              >
                <p>
                  ORES is a Machine Learning web service created by the
                  Wikimedia Foundation’s Machine Learning team. It offers a
                  variety of machine learning models and one of them is the
                  articlequality model.
                </p>
                <p>
                  ORES was created to help with important tasks, such as content
                  assessment or detection of vandalism. It depends on training
                  with labeled data e.g. a list of words that are labeled as
                  ‘damaging’.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div id="aq-info" className="card">
          <Card variant="outlined" classes={{ root: "aq-card" }}>
            <CardContent classes={{ root: "card-content" }}>
              <Typography variant="h6" classes={{ root: "card-typo" }}>
                The articlequality model
              </Typography>
              <Divider classes={{ root: "card-divider-yellow" }} />
              <Typography
                component="span"
                variant="body1"
                classes={{ body1: "content" }}
              >
                <p>
                  The articlequality model is one of ORES machine learning
                  models. It assesses existing articles automatically and
                  predicts the most likely grade for them based on their
                  structural characteristics.
                </p>
                <p>
                  This model uses 25 features to calculate predictions and is
                  trained to mimic human article quality assessment.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
