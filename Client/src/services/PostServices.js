import Client from './api'

export const GetBooks = async () => {
  try {
    const res = await Client.get('/books')
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetBook = async (id) => {
    try {
        const res = await Client.get(`/books/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const DeleteBook = async (id) => {
  try {
    const res = await Client.delete(`/books/${id}`);
        return res.data;
    } catch (error) {
        throw error;
  }
}
export const UpdateBook = async (id) => {
  try{
  const res = await Client.delete(`/books/${id}`);
        return res.data;
    } catch (error) {
        throw error;
  }
}
