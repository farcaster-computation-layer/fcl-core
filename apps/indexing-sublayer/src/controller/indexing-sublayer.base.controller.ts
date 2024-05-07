export abstract class IndexingSublayerBaseController {
  abstract fetchUnread(...args: any): Promise<any>;
  abstract indexData(...args: any): Promise<any>;
  abstract keepIndexing(...args: any): Promise<any>;
  abstract getIndexed(...args: any): Promise<any>;
}
