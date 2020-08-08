import express from "express";
import BaseController from "../utils/BaseController";
import { BugsService } from "../services/BugsService";
import auth0Provider from "@bcwdev/auth0provider";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return res.send(["Bug1", "Bug2"]);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creator = req.user.email;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
