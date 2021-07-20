import React from "react";
import Grades from "./text-assets/grades.json";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 *
 * @param {Object} props
 * @param {Object} props.results
 * @param {string} props.revid
 * @returns
 */

export default function PredictionExplanation(props) {
  console.log(Grades[props.results.prediction].criteria);
  return (
    <div>
      <Typography
        component="span"
        variant="body1"
        classes={{ body1: "content" }}
      >
        <p>
          The prediction for the revision with the ID {props.revid} suggests
          that this article gets the grading {props.results.prediction} with the
          probability of{" "}
          {Math.round(
            props.results.probability[props.results.prediction] * 100
          )}
          %. This indicates that the article meets following structural
          criterias:
          <ul className="list-style">
            {Grades[props.results.prediction].criteria.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          ORES article quality model only predicts the quality based on
          structural features, so a good and neutral writing style doesn’t
          factor into the prediction but should also be important.
        </p>
        <p>
          How this article revision could be improved:
          <ul className="list-style">
            {Grades[props.results.prediction].improvements.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </p>
      </Typography>
      <Button
        href="https://en.wikipedia.org/wiki/Wikipedia:Content_assessment#Grades"
        target="_blank"
        size="small"
      >
        Click here for more information about the content assesment
      </Button>
    </div>
  );
}
