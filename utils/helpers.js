import HttpRequest from "./HttpRequest";

export const sendEmail = async (payload) => HttpRequest.post("email", payload);
