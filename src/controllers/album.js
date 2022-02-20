const getDb = require('../services/db');

exports.create = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;
    const { name, year } = req.body;
  
    try {
      await db.query(
        'INSERT INTO Album (name, year, artistId) VALUES (?, ?, ?)',
        [name, 
        year,
        artistId]
      );
  
      res.status(201).json({ result: `The album '${name}' has been successfully added.` });
    } catch (error) {
      res.status(500).json(error);
    }
  
    db.close();
  };