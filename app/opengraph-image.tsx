import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg,#0b3c5d,#7bb6d9)",
          color: "white",
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        <div>Blue Waters Executive Cottages</div>
        <div style={{ fontSize: 32, marginTop: 24 }}>Brackley Beach, Prince Edward Island</div>
      </div>
    ),
    { ...size },
  );
}
