const router = require('express').Router();
const Device = require('../schemas/deviceSchema');
const DeviceConfiguration = require('../schemas/deviceConfigurationSchema');

router.post('/saveDevice', async (req, res) => {
    try {
        const device = await Device.create(req.body);
        res.status(201).json(device);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

router.post('/:deviceId/configuration', async (req, res) => {
    try {
        const configuration = await DeviceConfiguration.findOneAndUpdate(
            { device: req.params.deviceId },
            { device: req.params.deviceId, settings: req.body },
            { new: true, upsert: true, runValidators: true }
        );

        await Device.findByIdAndUpdate(req.params.deviceId, {
            configuration: configuration._id
        });

        res.status(201).json(configuration);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

router.get('/:mobile/configuration', async (req, res) => {
    try {
        const device = await Device.findOne({ mobile: req.params.mobile })
            .populate('configuration');

        if (!device || !device.configuration) {
            return res.status(404).json({ error: 'Mobile configuration not found' });
        }

        res.json(device.configuration);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;