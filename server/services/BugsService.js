import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async findAll(userEmail) {
    let bugs = await dbContext.Bugs.find({ creatorEmail: userEmail }).populate(
      "creator",
      "name picture"
    );
    return bugs;
  }
  async findById(id, userEmail) {
    let bug = await dbContext.Bugs.findById({ _id: id, creatorEmail: userEmail });
    if (!bug) {
      throw new BadRequest("Invalid Id");
    }
    return bug;
  }
  async create(rawData) {
    return await dbContext.Bugs.create(rawData)
  }
  async close(id, userEmail) {
    let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, { closed: true });
    if (!data) {
      throw new BadRequest("Invalid ID or you did not create this bug")
    }
  }
  async delete(id, userEmail) {
    let data = await dbContext.Bugs.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this bug");
    }
  }
  async edit(id, userEmail, update) {
    let data = await dbContext.Bugs.findByIdAndUpdate({ _id: id, creatorEmail: userEmail, closed: false }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you did not create this bug")
    }
    return data
  }
}


export const bugsService = new BugsService();
