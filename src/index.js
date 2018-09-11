class JestWatchMasterPlugin {
  constructor({ config } = {}) {
    this.branch = 'master';
    if (config && config.branch) {
      this.branch = config.branch;
    }
  }

  getUsageInfo() {
    return {
      key: 'm',
      prompt: `test changes since ${this.branch}`,
    };
  }

  run(globalConfig, updateConfigAndRun) {
    updateConfigAndRun({ mode: 'watch', changedSince: this.branch });
    return Promise.resolve();
  }
}

module.exports = JestWatchMasterPlugin;
