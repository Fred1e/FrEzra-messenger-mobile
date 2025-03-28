import 'package:socket_io_client/socket_io_client.dart' as IO;

class ChatService {
  late IO.Socket socket;

  void connect() {
    socket = IO.io('https://frezra-messeger-backend.vercel.app', IO.OptionBuilder()
        .setTransports(['websocket'])
        .disableAutoConnect()
        .build());

    socket.connect();
    socket.onConnect((_) {
      print('Connected to chat server');
    });

    socket.onDisconnect((_) => print('Disconnected from server'));
  }

  void sendMessage(String message, String senderId) {
    socket.emit('sendMessage', {"senderId": senderId, "message": message});
  }

  void listenForMessages(Function(String message) onMessageReceived) {
    socket.on('message', (data) => onMessageReceived(data["message"]));
  }

  void disconnect() {
    socket.disconnect();
  }
}
