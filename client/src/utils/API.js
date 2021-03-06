import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  updateUser: (user) => {
    return axios.put(`/api/user/${user.id}`, user);
  },
  updateUserWithObject: (id, updateObject) => {
    return axios.put(`/api/user/${id}`, updateObject)
  },
  createEvent: (eventname, location, description, organizer) => {
    return axios.post('/api/createEvent', {eventname:eventname, location:location, description:description, organizer:organizer});
  },
  getEvents: () => {
    return axios.get(`/api/events`);
  },
  getEvent: (id) => {
    return axios.get(`/api/events/${id}`);
  }

};
