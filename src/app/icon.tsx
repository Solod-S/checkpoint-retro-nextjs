import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080c10",
          borderRadius: "4px",
          border: "1.5px solid #ff5a1f",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 900,
            color: "#f4df19",
            fontFamily: "monospace",
          }}
        >
          C
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
