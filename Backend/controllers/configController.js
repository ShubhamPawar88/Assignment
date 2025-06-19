const Configuration = require('../models/Configuration');

// GET /api/configurations/:id → where id = configId (e.g. "sourah")
exports.getConfiguration = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Looking for configId:', id);

        const config = await Configuration.findOne({ configId: id });
        console.log('Found config:', config);

        if (!config) {
            return res.status(404).json({ message: 'Configuration not found' });
        }

        res.json(config.data);
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
};

// PUT /api/configurations/:id
exports.updateRemark = async (req, res) => {
    try {
        const { id } = req.params;
        const { remark } = req.body;

        const result = await Configuration.updateOne(
            { configId: id },
            { $set: { remark } }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Not updated. Configuration not found?' });
        }

        res.json({ message: 'success' });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
};
