// Stub socket service for build compatibility
export class SocketService {
  on(event: string, callback: Function) {}
  emit(event: string, data?: any) {}
  off(event: string, callback?: Function) {}
  connect() {}
  disconnect() {}
}