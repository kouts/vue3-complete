import dush from 'dush';

export const createEmitter = (options = {}) => {
  const settings = Object.assign({}, {
    emitMethodName: '$fire'
  }, options);
  return {
    install: (app, options) => {
      const eventEmitter = dush();
      const self = app.config.globalProperties;
      self.$on = eventEmitter.on;
      self.$off = eventEmitter.off;
      self.$once = eventEmitter.once;
      app.mixin({
        beforeCreate() {
          this[settings.emitMethodName] = (event, ...args) => {
            eventEmitter.emit(event, ...args);
            this.$emit(event, ...args);
          };
        }
      });
    }
  }
};
