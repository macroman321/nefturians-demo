const express = require('express');
const factionController = require('../../controllers/faction.controller');

const router = express.Router();

router.route('/:address').get(factionController.createFaction).post(factionController.createFactiongetFaction);
