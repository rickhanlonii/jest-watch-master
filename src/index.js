class JestWatchMasterPlugin {
  getUsageInfo() {
    return {
      key: 'm',
      prompt: 'test changes since master',
    }
  }

  run(globalConfig, updateConfigAndRun) {
    updateConfigAndRun({ mode: 'watch', changedSince: 'master' })
    return Promise.resolve()
  }
}

module.exports = JestWatchMasterPlugin
