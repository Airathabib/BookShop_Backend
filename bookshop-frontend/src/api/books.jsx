import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1/books';

export const getBooks = (params) => {
  return axios.get(baseURL, { params });
};

export const addBook = async (bookData) => {
  const response = await axios.post(
    'http://localhost:3000/api/v1/books',
    bookData
  );
  return response.data;
};

export const editBook = (bookId, data) => {
  return axios.put(`${baseURL}/${bookId}`, data);
};

export const deleteBook = async (bookId) => {
  const token = localStorage.getItem('token');

  console.log(bookId);

  try {
		const response = await axios
			.delete(`${baseURL}/${bookId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		console.log('DELETE response:', response);
		return response;
	} catch (error) {
		console.error('Error deleting book:', error);
		throw error;
	}
};
