// Socket service stub for build compatibility
export interface SocketService {
  on(event: string, callback: (data?: any) => void): void;
  emit(event: string, data?: any): void;
  off(event: string, callback?: (data?: any) => void): void;
  connect(): void;
  disconnect(): void;
}

class SocketServiceImpl implements SocketService {
  on(event: string, callback: (data?: any) => void): void {
    // Stub implementation
  }
  
  emit(event: string, data?: any): void {
    // Stub implementation
  }
  
  off(event: string, callback?: (data?: any) => void): void {
    // Stub implementation
  }
  
  connect(): void {
    // Stub implementation
  }
  
  disconnect(): void {
    // Stub implementation
  }
}

export const socketService = new SocketServiceImpl();