// components/ScreenshotComponent.js
"use client"
import { useState } from "react";
import html2canvas from "html2canvas";
import Image from "next/image";

const ScreenshotComponent = () => {
    const [screenshotPath, setScreenshotPath] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");

    const takeScreenshot = async () => {
        const element = document.getElementById("mainDiv");
        if (element) {
            try {
                const canvas = await html2canvas(element);
                const imagePath = canvas.toDataURL("image/png");
                setScreenshotPath(imagePath);

                // Generate a simple URL for the image (acting as a URL shortener)
                const generatedUrl = generateShortUrl();
                setDownloadUrl(generatedUrl);

                // Store the image in localStorage (base64 encoded image)
                localStorage.setItem(generatedUrl, imagePath);

                console.log("Screenshot taken and stored at: ", imagePath);
            } catch (error) {
                console.error("Error taking screenshot: ", error);
            }
        }
    };

    // Function to generate a simple short URL (for demonstration)
    const generateShortUrl = () => {
        const randomString = Math.random().toString(36).substring(2, 8); // Generate a random 6-character string
        return `https://short.url/${randomString}`;
    };

    // Function to trigger download of the image
    const downloadImage = () => {
        if (screenshotPath) {
            const link = document.createElement("a");
            link.href = screenshotPath;
            link.download = "screenshot.png";
            link.click();
        }
    };

    return (
        <div className="flex justify-center w-full items-center min-h-screen bg-gray-100">
            <div id="mainDiv" className="relative p-8 bg-white rounded shadow-lg">
                <div className="mb-[20rem] bg-blue-100 p-4 rounded">
                    <h1 className="text-2xl font-semibold">Main Content</h1>
                    <p>This is the content inside the main div.</p>
                </div>

                {screenshotPath && (
                    <div className="mt-4">
                        <p className="text-lg">Screenshot Path:</p>
                        <Image
                            src={screenshotPath}
                            alt="Screenshot"
                            className="mt-2 w-64"
                            width={256}
                            height={256}
                        />
                    </div>
                )}
            </div>

            <button
                onClick={takeScreenshot}
                className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Take Screenshot
            </button>

            {screenshotPath && (
                <div className="mt-4">
                    <p className="text-lg">Download the Screenshot:</p>
                    <button
                        onClick={downloadImage}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                        Download Screenshot
                    </button>
                </div>
            )}

            {downloadUrl && (
                <div className="mt-4">
                    <p className="text-lg">Your Short URL:</p>
                    <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        {downloadUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default ScreenshotComponent;
