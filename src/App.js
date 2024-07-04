import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { setSocket, clearSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';
import { BASE_URL_SOCKET } from './index';
import './App.css';

function App() {
  const authUser = useSelector(store => store.user.authUser);
  const socketId = useSelector(store => store.socket.socketId); // Use socketId instead of entire socket object
  const dispatch = useDispatch();

  useEffect(() => {
    let socketio;

    if (authUser && !socketId) { // Check if socketId exists to prevent reconnecting on each render
      socketio = io(`${BASE_URL_SOCKET}`, {
        query: {
          userId: authUser._id
        }
      });

      socketio.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      dispatch(setSocket({ id: socketio.id })); // Dispatch socket ID or relevant data
      // You may dispatch other serializable data if needed

      return () => {
        socketio.disconnect();
        dispatch(clearSocket());
      };
    } else if (!authUser && socketId) {
      // Clear socket when user logs out
      dispatch(clearSocket());
    }
  }, [authUser, dispatch, socketId]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
