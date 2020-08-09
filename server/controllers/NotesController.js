import express from "express";
import BaseController from "../utils/BaseController";
import { notesService } from "../services/NotesService";
import auth0Provider from "@bcwdev/auth0provider";

export class NotesController extends BaseController {

    constructor() {
        super("api/notes");
        this.router
            .use(auth0Provider.getAuthorizedUserInfo)
            .get("", this.getAll)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await notesService.find())
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            return res.send(await notesService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            return res.send(await notesService.edit(req.params.id, req.userInfo.email, req.body))
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await notesService.delete(req.params.id, req.userInfo.email)
            return res.send("Successfully Deleted")
        } catch (error) {
            next(error)
        }
    }
}