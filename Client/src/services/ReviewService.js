import Client from './api'

export const GetReviews = async () => {
  try {
    const res = await Client.get('/Reviews')
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetReview = async (id) => {
    try {
        const res = await Client.get(`/Reviews/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const DeleteReview = async (id) => {
  try {
    const res = await Client.delete(`/Reviews/${id}`);
        return res.data;
    } catch (error) {
        throw error;
  }
}
export const UpdateReview = async (id) => {
  try{
  const res = await Client.post(`/Reviews/${id}`);
        return res.data;
    } catch (error) {
        throw error;
  }
}
