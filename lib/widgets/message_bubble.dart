import 'package:flutter/material.dart';

class MessageBubble extends StatelessWidget {
  final String text;
  const MessageBubble({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: Container(
        padding: const EdgeInsets.all(10),
        margin: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
        decoration: BoxDecoration(color: Colors.blue, borderRadius: BorderRadius.circular(8)),
        child: Text(text, style: const TextStyle(color: Colors.white)),
      ),
    );
  }
}
