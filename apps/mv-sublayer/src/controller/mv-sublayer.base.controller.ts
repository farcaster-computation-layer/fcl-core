export abstract class MvSublayerBaseController {
  abstract receiveData(...args: any): Promise<any>;
}
