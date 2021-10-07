import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NotebookList from '@/components/NotebookList'
import NoteDetail from '@/components/NoteDetail'
import TrashDetail from '@/components/TrashDetail'
import Test from '@/components/SelfLogin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/test',
      component:Test
    },
    {
      path:'/notebooks',
      component:NotebookList
    },
    {
      path:'/note/:noteId',
      component:NoteDetail
    },
    {
      path:'/trash/:noteId',
      component:TrashDetail
    }
  ]
})













