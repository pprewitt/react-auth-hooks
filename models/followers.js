const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followersSchema = new Schema({
    ContentCreatorId: { type: Number, required: true },
    ContentCreatorName: { type: String, required: true },
    FollowerId: { type: Number, default: true },
    Follower: { type: String, required: true },
});

const Followers = mongoose.model("Followers", followersSchema);

module.exports = Followers;