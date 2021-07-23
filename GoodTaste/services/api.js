import axios from "axios";

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
});

// android emulator: localhost (adb reverse tcp:3333 tcp:3333)
// android emulator: 10.0.2.2 (Android Studio)

export default api;