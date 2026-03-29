import mongoose from "mongoose";

const SiteStatsSchema = new mongoose.Schema({
  visitors: {
    type: Number,
    default: 0,
  },
});

const SiteStats = mongoose.models.SiteStats || mongoose.model("SiteStats", SiteStatsSchema);

export default SiteStats;
