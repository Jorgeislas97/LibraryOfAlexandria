import Client from './api'

export const GetBooks = async () => {
  try {
    const res = await Client.get('/books')
    return res.data
  } catch (error) {
    throw error
  }
}
import Client from './api';

export const GetBook = async (id) => {
    try {
        const res = await Client.get(`/books/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}