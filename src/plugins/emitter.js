import dush from 'dush';

export const createEmitter = (options = {}) => {
  const settings = Object.assign({}, {
    emitMethodName: '$fire'
  }, options);
  return {
    install: (app, options) => {
      const eventEmitter = dush();
      app.config.globalProperties.$on = eventEmitter.on;
      app.config.globalProperties.$off = eventEmitter.off;
      app.config.globalProperties.$once = eventEmitter.once;
      app.mixin({
        beforeCreate() {
          this[settings.emitMethodName] = (event, ...args) => {
            const e = eventEmitter.emit(event, ...args);
            this.$emit(event, ...args);
          };
        }
      });
    }
  }
};
