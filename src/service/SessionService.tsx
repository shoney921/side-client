export default class SessionService {
  public deleteSessionInfo = (): void => {
    this.deleteSessionStorage();
  };

  private deleteSessionStorage = (): void => {
    sessionStorage.clear();
  };
}
