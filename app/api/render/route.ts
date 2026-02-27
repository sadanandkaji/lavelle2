import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("file");

    if (!fileName) {
      return new Response("File not specified", { status: 400 });
    }

    // 🔥 Secure video folder path
    const videoPath = path.join(process.cwd(), "public/videos", fileName);

    if (!fs.existsSync(videoPath)) {
      return new Response("File not found", { status: 404 });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;

    const range = req.headers.get("range");

    if (!range) {
      // Send entire file if no range header
      const file = fs.readFileSync(videoPath);
      return new Response(file, {
        headers: {
          "Content-Type": "video/mp4",
          "Content-Length": fileSize.toString(),
        },
      });
    }

    // Parse Range header
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;

    const stream = fs.createReadStream(videoPath, { start, end });

    return new Response(stream as any, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}