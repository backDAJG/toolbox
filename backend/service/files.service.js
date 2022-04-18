const axios = require('axios');

class FilesService {
  constructor() {
    this.apiKey = 'aSuperSecretKey';
    this.baseURL = ' https://echo-serv.tbxnet.com/v1';
  }

  async getFile(filename) {
    try {
      const file = await axios.get(`${this.baseURL}/secret/file/${filename}`, {
        headers: { authorization: `Bearer ${this.apiKey}` },
      });
      const lines = file.data.split('\n');
      const resolvedLines = lines.map((line, index) => {
        if (index === 0) return;
        const stack = line.split(',');
        if (stack.length > 3) {
          return {
            text: stack[1],
            number: parseInt(stack[2]),
            hex: stack[3],
          };
        }
      });
      return {
        file: filename,
        lines: resolvedLines.filter((line) => line),
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getFiles() {
    try {
      const files = await axios.get(`${this.baseURL}/secret/files`, {
        headers: { authorization: `Bearer ${this.apiKey}` },
      });
      return Promise.all(
        files.data.files.map((filename) => this.getFile(filename))
      ).then((res) => {
        return res.filter((stack) => !stack.error);
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = FilesService;
