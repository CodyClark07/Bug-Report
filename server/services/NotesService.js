import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {

    async find(query = {}) {
        return await dbContext.Notes.find({ query })
    }
    async getAll(id) {
        return await dbContext.Notes.find({ bugId: id })
    }
    async findById(id, userEmail) {

        let note = await dbContext.Notes.findById({ _id: id, creatorEmail: userEmail });
        if (!note) {
            throw new BadRequest("Invalid Id");
        }
        return note;
    }
    async create(body) {
        return await dbContext.Notes.create(body)
    }
    async edit(id, userEmail, body) {
        return await dbContext.Notes.findByIdAndUpdate({ _id: id, creatorEmail: userEmail }, body, { new: true })
    }
    async delete(id, userEmail) {
        let data = await dbContext.Notes.findOneAndRemove({ _id: id, creatorEmail: userEmail });
        if (!data) {
            throw new BadRequest("Invalid ID or you did not create this bug")
        }
    }

}
export const notesService = new NotesService();