export function useMessageReset(message) {
  setTimeout(() => {
    message.value = '';
  }, 5000);
};
