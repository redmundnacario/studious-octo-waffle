import fetch from "node-fetch";

import { asyncHandler } from "../middleware/asyncHandler.js";
import { ErrorResponse } from "../utils/errorResponse.js";

const urlArray = [
    "https://jsonplaceholder.typicode.com/users",
    "https://google.com",
    "https://facebook.com",
    "https://twitter.com",
    "https://discord.com",
];

export const getContentLength = asyncHandler(async (req, res, next) => {
    let url;

    if (!req.query.id) {
        return next(
            new ErrorResponse(400, "Id query parameter is not present.")
        );
    }

    try {
        const index = parseInt(req.query.id);
        if (index === 0) throw Error();
        url = urlArray[index - 1];
    } catch (error) {
        return next(new ErrorResponse(400, "Id provided not valid."));
    }

    if (!url) {
        return next(
            new ErrorResponse(404, "URL with specific Id was not found.")
        );
    }

    const data = await fetch(url).then((response) => {
        const contentLength = response.headers.get("content-length");
        return contentLength
            ? parseInt(contentLength, 10)
            : response.body["_chunkSize"];
    });

    if (!data) {
        return next(
            new ErrorResponse(
                404,
                "The content-length or response body size not found."
            )
        );
    }

    res.status(200).json({
        success: true,
        "content-length": data,
    });
});
