// logger.ts

export type LogLevel = 'info' | 'debug' | 'warn' | 'error';

const getTimestamp = (): string => {
  return new Date().toISOString();
};

const logMessage = (level: LogLevel, message: string): void => {
  const timestamp = getTimestamp();
  const formattedMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;

  switch (level) {
    case 'info':
      console.info(formattedMessage);
      break;
    case 'debug':
      console.debug(formattedMessage);
      break;
    case 'warn':
      console.warn(formattedMessage);
      break;
    case 'error':
      console.error(formattedMessage);
      break;
    default:
      console.log(formattedMessage);
      break;
  }
};

export const log = {
  info: (message: string) => logMessage('info', message),
  debug: (message: string) => logMessage('debug', message),
  warn: (message: string) => logMessage('warn', message),
  error: (message: string) => logMessage('error', message),
};
