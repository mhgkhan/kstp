const { NextResponse } = require("next/server");

export const apiSuccessResponse = (success, status, message, data={}) => NextResponse.json({success, message, data}, {status})
