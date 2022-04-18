const { Router } = require('express');
const FilesService = require('../service/files.service');

const filesApi = (app) => {
  const router = Router();
  app.use('/files/data', router);

  const filesService = new FilesService();

  router.get('/', async (req, res, next) => {
    try {
      const files = await filesService.getFiles();
      res.status(200).json({ files: files });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = filesApi;
