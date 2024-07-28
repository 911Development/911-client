import HttpRequest from "./HttpRequest";

export const sendEmail = async (payload) => HttpRequest.post("email", payload);

export const createQutoe = async (payload) =>
  HttpRequest.post("quote", payload);
