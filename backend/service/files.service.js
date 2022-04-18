const { default: axios } = require('axios');

class FilesService {
  constructor() {
    this.apiKey = 'aSuperSecretKey';
    this.baseURL = ' https://echo-serv.tbxnet.com/v1';
  }

  async getFiles() {
    try {
      const files = await axios.get(`${this.baseURL}/secret/files`, {
        headers: { authorization: `Bearer ${this.apiKey}` },
      });
      return files;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = FilesService;
