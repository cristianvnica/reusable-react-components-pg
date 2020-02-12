import React from "react";
import TextInputCSSModules from "react-reusable-components/TextInputCSSModules";

/** Required TextBox with error, styled with CSS modules technique */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputCSSModules
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
