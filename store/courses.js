import { defineStore } from 'pinia'
import { coursesData, boardListTypes } from '@/assets/data/learning'

export const useCourseStore = defineStore({
  id: 'course',
  state: () => ({
    courses: coursesData,
    types: boardListTypes,
    boardCourses: [],
    filter: null,
    // nextId: 0,
  }),
  getters: {
    // getCoursesByFilter: (state) => {
      // if(state.filter){
      //   return state.courses.filter(x => x.tags.includes(state.filter))
      // } else {
      //   return state.courses
      // }
      // return (tag) => state.courses.filter(x => x.tags.includes(tag))
    // },
    // boardCoursesCount: (state) => {
    //   return state.boardCourses.length
    // }

    // finishedCourses(state) {
    //   return state.courses.filter((coursesearchValue) => course.is_done)
    // },
    // unfinishedCourses(state) {
    //   return state.courses.filter((course) => !course.is_done)
    // },searchValue
    //     return this.finishedcourses
    //   } else if (this.filter === 'unfinished') {
    //     return this.unfinishedcourses
    //   }
    //   return this.courses
    // },
  },
  actions: {
    // addCourse(text) {
    //   this.courses.push({ text, id: this.nextId++, is_done: false })
    // },
    getBoardCourses(boardListType) {
      if(boardListType === 'High priority'){
        if(this.filter){
          return this.courses.filter(x => x.priority === 'High' && ! x.is_done && x.tags.includes(this.filter))
        }
        return this.courses.filter(x => x.priority === 'High' && ! x.is_done)
      }
      else if(boardListType === 'Medium priority'){
        if(this.filter){
          return this.courses.filter(x => x.priority === 'Medium' && ! x.is_done && x.tags.includes(this.filter))
        }
        return this.courses.filter(x => x.priority === 'Medium' && ! x.is_done)
      }
      else if(boardListType === 'Low priority'){
        if(this.filter){
          return this.courses.filter(x => x.priority === 'Low' && ! x.is_done && x.tags.includes(this.filter))
        }
        return this.courses.filter(x => x.priority === 'Low' && ! x.is_done)
      }
      else if(boardListType === 'Completed'){
        if(this.filter){
          return this.courses.filter(x => x.is_done && x.tags.includes(this.filter))
        }
        return this.courses.filter(x => x.is_done)
      }
    },
    setFilter(filter){
      this.filter = filter
    },
    setSearch(search){
      if(search){
        this.courses = this.courses.filter(x => {
          return (
            ( x.topic.toLowerCase().includes(search.toLowerCase()) ) ||
            ( x.author.toLowerCase().includes(search.toLowerCase()) ) ||
            ( x.source.toLowerCase().includes(search.toLowerCase()) )
          )
        })
      } else {
        this.courses = coursesData
      }
    },
  }
})
