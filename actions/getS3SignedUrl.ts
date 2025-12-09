"use server";

import crypto from "crypto";
import {
  // DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

type GetSignedURLParams = {
  keyName: string;
  fileType: string;
  fileSize: number;
  checksum: string;
};

// type GenerateFileName = () => string

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3Client = new S3Client({
  region: process.env.S3_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});

export async function getS3SignedUrl(files: GetSignedURLParams[]) {
  console.log("GET SIGNED URL STARTED");
  console.log({
    files,
  });

  const isAuthenticated = true;
  if (!isAuthenticated) {
    return { data: null, error: "Not authenticated" };
  }

  const urls: Record<string, string> = {};

  for (const file of files) {
    const audioFormat =
      file.fileType.split("/")[0] === "audio" ?
        "-" + file.fileType.split("/")[1]
      : "";

    console.log(audioFormat);

    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: generateFileName() + audioFormat,
      ContentType: file.fileType,
      ContentLength: file.fileSize,
      ChecksumSHA256: file.checksum,
      // Let's also add some metadata which is stored in s3.
      //  Metadata: {
      //   userId: session.user.id
      // },
    });

    try {
      const url = await getSignedUrl(
        s3Client,
        putObjectCommand,
        { expiresIn: 60 * 5 } // 5 minutes
      );
      urls[file.keyName] = url;
    } catch (error) {
      console.error(error);
      return { data: null, error: (error as Error).message };
    }
  }

  console.log({ urls });

  console.log("GET SIGNED URL ENDED");

  return { data: { urls }, error: null };
}
