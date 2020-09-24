class JestWatchMasterPlugin {
  constructor({ config } = {}) {
    this.branch = 'master';
    this.enabled = false;

    if (config && config.branch) {
      this.branch = config.branch;
    }
  }

  getUsageInfo() {
    return {
      key: 'm',
      prompt: `test changes since ${this.enabled ? 'last commit' : this.branch}`,
    };
  }

  run(globalConfig, updateConfigAndRun) {
    this.enabled = !this.enabled;

    updateConfigAndRun({ mode: 'watch', changedSince: (this.enabled ? this.branch : null)});
    return Promise.resolve();
  }
}

module.exports = JestWatchMasterPlugin;
