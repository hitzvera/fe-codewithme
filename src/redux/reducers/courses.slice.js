import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getAllCourses(state, action) {
      state.courses = state.courses = [
        {
          id: 1,
          type: 'courses',
          title: 'Javascript',
          buttonText: 'Enroll',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageUrl:
            'https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png',
          to_url: `/course/content/1`,
        },
        {
          id: 2,
          title: 'React.js',
          type: 'courses',
          buttonText: 'Enroll',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          to_url: `/course/content/2`,
        },
        {
          id: 3,
          title: 'Python',
          type: 'courses',
          buttonText: 'Enroll',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
          to_url: `/course/content/3`,
        },
        {
          id: 4,
          title: 'HTML & CSS',
          type: 'courses',
          buttonText: 'Enroll',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageUrl:
            'https://www.techrepublic.com/wp-content/uploads/2022/07/html-css-beginners.jpg?x27457',
          to_url: `/course/content/4`,
        },
      ];
    },
  },
});

export default coursesSlice.reducer;

export const { getAllCourses } = coursesSlice.actions;
