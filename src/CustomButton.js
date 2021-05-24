/** @jsxImportSource @emotion/react */

export function CustomButton() {
  return (
    <button
      css={{
        "backgroundColor": "hotpink",
        "&:hover": {
          color: "lightgreen"
        }
      }}
    ></button>
  );
}
