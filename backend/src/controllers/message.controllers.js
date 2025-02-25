import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.models.js";
import User from "../models/user.models.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUsersOnSidebar = async (req, res) => {
  try {
    const loggedUserId = req.body._id;
    const filterUser = await User.find({
      _id: { $ne: loggedUserId },
    }).select("-password");

    res.status(200).json(filterUser);
  } catch (error) {
    console.log("Error in getUserOnSidebar controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatWith } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatWith },
        { senderId: userToChatWith, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      // Upload the image to cloudinary
      const uploadResource = await cloudinary.uploader.upload(image);
      imageUrl = uploadResource.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // Real-time functionality -> socket.io
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
