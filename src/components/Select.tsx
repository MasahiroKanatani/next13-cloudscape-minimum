"use client";

import { Select } from "@cloudscape-design/components";

export const CustomSelect = () => (
  <Select
    selectedOption={null}
    options={[
      { label: "A", value: "A" },
      { label: "B", value: "B" },
    ]}
    onChange={(e) => {
      console.log({ e });
    }}
  />
);
