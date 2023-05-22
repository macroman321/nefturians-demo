const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { factionService } = require('../services');
const ApiError = require('../utils/ApiError');

const createFaction = catchAsync(async (req, res) => {
  const faction = await factionService.createFaction(req.body);
  res.status(httpStatus.CREATED).send(faction);
});

const getFaction = catchAsync(async (req, res) => {
  const faction = await factionService.getHashByAddress(req.params.address);
  if (!faction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Address not found');
  }
  res.send(faction);
});

module.exports = {
  createFaction,
  getFaction,
};
