import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import {CustomButton} from "./CustomButton";

expect.addSnapshotSerializer(createSerializer());

describe("IconComponent", () => {
  afterEach(cleanup)

  it("should match the snapshot for the given props", () => {
    const { asFragment } = render(<CustomButton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
