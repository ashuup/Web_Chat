import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';
import { BASE_URL_SOCKET } from './index';
import './App.css';

function App() {
  const { authUser } = useSelector(store => store.user);
  const { socket } = useSelector(store => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socketio = io(`${BASE_URL_SOCKET}`, {
        query: {
          userId: authUser._id
        }
      });
      dispatch(setSocket(socketio));

      socketio?.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser, dispatch, socket]);

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
