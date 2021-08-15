export class ConfigHelper {
  static CONFIG_ERROR_MESSAGE = 'Tenha certeza que você tem todas configurações no seu arquivo .env';

  static checkConfig(value: any): void {
    if (!value) {
      throw Error(ConfigHelper.CONFIG_ERROR_MESSAGE);
    }
  }
}
