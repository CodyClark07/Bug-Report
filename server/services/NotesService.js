import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {

    async find(query = {}) {
        return await dbContext.Notes.find({ query })
    }
    async create(body) {
        return await dbContext.Notes.create(body)
    }
    async edit(id, userEmail, body) {
        return await dbContext.Notes.findByIdAndUpdate({ _id: id, creatorEmail: userEmail }, body, { new: true })
    }
    async delete(id) {
        let data = await dbContext.Notes.findByIdAndRemove({ _id: id })
    }

}
export const notesService = new NotesService();