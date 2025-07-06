import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchIdeaAnalytics = async (ideaId) => {
  const res = await axios.get(`${API}/ideas/${ideaId}/analytics`, {
    withCredentials: true,
  });
  return res.data;
};
