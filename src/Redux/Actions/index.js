import { ADD_ARTICLE } from "../Constants/index.js";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
