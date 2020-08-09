import express from "express";
import BaseController from "../utils/BaseController";
import { bugsService } from "../services/BugsService";
import auth0Provider from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get("/:id", this.getBugById)
      .get("/:id/notes", this.getBugNotes)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      return res.send({ data: await bugsService.findAll(req.userInfo.email), message: "got all bugs" })
    } catch (error) {
      next(error);
    }
  }
  async getBugById(req, res, next) {
    try {
      return res.send(await bugsService.findById(req.params.id, req.userInfo.email))
    } catch (error) {
      next(error)
    }
  }
  async getBugNotes(req, res, next) {
    try {
      return res.send(await notesService.findById(req.params.id, req.userInfo.email))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creator = req.user.email;
      return res.send({ data: await bugsService.create(req.body), message: "created a bug" });
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      return res.send({ data: await bugsService.edit(req.params.id, req.userInfo.email, req.body), message: "edited a bug" })
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await bugsService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully Deleted")
    } catch (error) {
      next(error)
    }
  }
}
