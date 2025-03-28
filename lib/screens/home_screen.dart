import 'package:flutter/material.dart';
import 'chat_screen.dart';
import '../services/auth_service.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  void _logout(BuildContext context) async {
    await AuthService().signOut();
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("FrEzra"),
        actions: [IconButton(icon: const Icon(Icons.logout), onPressed: () => _logout(context))],
      ),
      body: Center(
        child: ElevatedButton(
          child: const Text("Go to Chat"),
          onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const ChatScreen())),
        ),
      ),
    );
  }
}
