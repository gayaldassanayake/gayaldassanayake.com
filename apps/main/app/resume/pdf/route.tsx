import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";
import resumeData from "../../../data/resume.json";
import type { Resume } from "@repo/content-utils";

export async function GET() {
  const buffer = await renderToBuffer(
    <ResumePDF resume={resumeData as Resume} />
  );

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="gayal-dassanayake-resume.pdf"',
    },
  });
}
