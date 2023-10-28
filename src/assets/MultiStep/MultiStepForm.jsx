import { useState } from "react";

import { TravelDestinationInput } from "./TravelDestinationInput";
import { ReasonTravel } from "./ReasonTravel";
import { FavoriteActivity } from "./FavouriteActivity";
import { Age } from "./Age";
import { Name } from "./Name";
import { Color } from "./Color";
import { Season } from "./Season";
import { SummaryData } from "./SummaryData";

import { summaryKeys } from "./summaryKeys";

import "./MultiStepForm.css";

const initialSummary = {
  [summaryKeys.Destination]: "",
  [summaryKeys.Reason]: "",
  [summaryKeys.Activity]: "",
  [summaryKeys.Name]: "",
  [summaryKeys.Age]: "",
  [summaryKeys.Email]: "",
  [summaryKeys.Color]: "",
  [summaryKeys.Season]: "",
};

const isUndefinedOrEmpty = (value) => {
  return value === undefined || value.trim() === "";
};

export const MultiStepForm = () => {
  const [summary, setSummary] = useState(initialSummary);

  const [currentStep, setCurrentStep] = useState(0);
  const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);

  const updateSummary = (field, value) => {
    setSummary((values) => ({ ...values, [field]: value }));
  };

  const surveyStepContents = [
    {
      name: "Travel destination",
      valueKey: summaryKeys.Destination,
      content: (
        <TravelDestinationInput
          value={summary[summaryKeys.Destination]}
          updateDestination={(value) =>
            updateSummary(summaryKeys.Destination, value)
          }
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Destination]),
    },
    {
      name: "Travel Reason",
      valueKey: summaryKeys.Reason,
      content: (
        <ReasonTravel
          value={summary[summaryKeys.Reason]}
          updateReason={(value) => updateSummary(summaryKeys.Reason, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Reason]),
    },
    {
      name: "Favourite Activity",
      valueKey: summaryKeys.Activity,
      content: (
        <FavoriteActivity
          value={summary[summaryKeys.Activity]}
          updateActivity={(value) => updateSummary(summaryKeys.Activity, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Activity]),
    },
    {
      name: "Name",
      valueKey: summaryKeys.Name,
      content: (
        <Name
          value={summary[summaryKeys.Name]}
          updateName={(value) => updateSummary(summaryKeys.Name, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Name]),
    },
    {
      name: "Age",
      valueKey: summaryKeys.Age,
      content: (
        <Age
          value={summary[summaryKeys.Age]}
          updateAge={(value) => updateSummary(summaryKeys.Age, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Age]),
    },
    {
      name: "Favorite Color",
      valueKey: summaryKeys.Color,
      content: (
        <Color
          value={summary[summaryKeys.Color]}
          updateColor={(value) => updateSummary(summaryKeys.Color, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Color]),
    },
    {
      name: "Favorite Season",
      valueKey: summaryKeys.Season,
      content: (
        <Season
          value={summary[summaryKeys.Season]}
          updateSeason={(value) => updateSummary(summaryKeys.Season, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[summaryKeys.Season]),
    },
  ];

  const nextStep = () => {
    if (currentStep < surveyStepContents.length - 1)
      setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setIsSurveySubmitted(true);
  };

  const handleStartSurveyClick = () => {
    setSummary(initialSummary);
    setCurrentStep(0);
    setIsSurveySubmitted(false);
  };

  return (
    <div className="container">
      {!isSurveySubmitted && (
        <div>
          {surveyStepContents[currentStep].content}

          <div className="footer">
            {currentStep > 0 && <button onClick={prevStep}>Back</button>}
            {currentStep < surveyStepContents.length - 1 ? (
              <button
                onClick={nextStep}
                disabled={!surveyStepContents[currentStep].isValid()}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!surveyStepContents[currentStep].isValid()}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
      {isSurveySubmitted && (
        <>
          <p>Summary:</p>
          <div className="summary">
            {surveyStepContents.map((stepData, index) => (
              <SummaryData
                key={index}
                name={stepData.name}
                value={summary[stepData.valueKey]}
              />
            ))}
          </div>
          <button onClick={handleStartSurveyClick}>Start survey again!</button>
        </>
      )}
    </div>
  );
};
