import React from "react";

import Typography from "@material-ui/core/Typography";

export default function PredictionExplanation() {
  return (
    <div>
      <Typography
        component="span"
        variant="body1"
        classes={{ body1: "content" }}
      >
        <p>
          The prediction for the revision with the ID 1027689158 suggests that
          this article gets the grading B with the probability of 38%. This
          indicates that the article meets following structural criterias:
          <ul className="list-style">
            <li>Suitable referenced</li>
            <li>Has a defined structure</li>
            <li>Pictures or diagrams are present</li>
            <li>An Infobox is present </li>
          </ul>
          ORES article quality model only predicts the quality based on
          structural features, so a good and neutral writing style doesn’t
          factor into the prediction but should also be important.
        </p>
        <p>
          How this article revision could be improved:
          <ul className="list-style">
            <li>
              check if all inline citations are referenced and from reliable
              sources
            </li>
            <li>add more images, videos or audio if possible</li>
            <li>
              add some links with relevant websites with a short description
            </li>
          </ul>
        </p>
      </Typography>
    </div>
  );
}
