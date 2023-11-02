import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', 
  });

const useAxiosSecure = () => {
    const { Logout_ } = useContext(AuthContext); 
    const navigate = useNavigate(); 

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('bistro');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        });
    
        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await Logout_();
              navigate('/login');
            }
            return Promise.reject(error);
          }
        );
      }, [Logout_ , navigate,axiosSecure]);
    

    return  [axiosSecure];
};

export default useAxiosSecure;