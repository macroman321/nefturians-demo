import mongoose from 'mongoose';

const nefturianFactionSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
});

nefturianFactionSchema.statics.isFactionRolled = async function (address){
  const faction = await this.findOne({ address });
  return !!faction;
};

const NefturianFaction = mongoose.model('NefturianFaction', nefturianFactionSchema);
module.exports = NefturianFaction;
