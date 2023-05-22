const httpStatus = require('http-status');
const NefturianFaction = require('../models');
const ApiError = require('../utils/ApiError');

const createFaction = async (factionBody) => {
  if (await NefturianFaction.isFactionRolled(factionBody.address)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Address already rolled');
  }
  const characters = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 128; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return NefturianFaction.create({ address: factionBody.address, hash: result });
};

const getHashByAddress = async (address) => {
  return NefturianFaction.findOne({ address });
};

module.exports = {
  createFaction,
  getHashByAddress,
};
