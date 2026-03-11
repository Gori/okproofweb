import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Hire those who get things done with AI — ok.proof";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const fontData = await readFile(
    join(process.cwd(), "public/fonts/ABCGaisyr-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFF6B",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "ABC Gaisyr",
              fontSize: "72px",
              color: "#2C111D",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Hire those who
          </div>
          <div
            style={{
              fontFamily: "ABC Gaisyr",
              fontSize: "72px",
              color: "#402531",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            get things done with AI.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "ABC Gaisyr",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
