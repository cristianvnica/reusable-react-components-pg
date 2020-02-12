import React from "react";
import TextInputStyledComponents from "react-reusable-components/TextInputStyledComponents";

/** Required TextBox with error, styled with StyledComponents technique */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required"
      />
    );
  }
}
