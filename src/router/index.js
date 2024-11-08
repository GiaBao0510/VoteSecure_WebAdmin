import { createWebHashHistory, createRouter } from "vue-router";
import Login from '@/views/Login.vue';

const routes =[
    //Trang chính (Đăng nhập)
    {
      path: "/",
      name: "Login",
      component: Login,
    },

    //Trang xác thực mã otp
    {
      path: "/verify-otp",
      name: "VerifyOTP",
      component: () => import("@/views/VerifyOTP.vue"),
    },

    //Trang không xác định
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },

    //Trang chính admin
    {
      path: "/admin",
      name: "HomeAdmin",
      component: () => import("@/views/Admin/home.vue"),
      meta: {
        requiresAuth: true,
      },
      children:[
        //Thống kê
        {
          path: 'statistical',
          name: 'Statistical',
        },

        //Kỳ bầu cử
        {
          path: 'elections',
          name: 'Elections',
          component: () => import("@/views/Admin/elections/elections.vue"),
        },

        //Vai trò
        {
          path: 'roles',
          name: 'Roles',
          component: () => import("@/views/Admin/roles/roles.vue"),
        },

        //Đơn vị bầu cử
        {
          path: 'constituency',
          name: 'Constituency',
          component: () => import("@/views/Admin/constituencies/constituencies.vue"),
        },
        //Danh sách lịch sử đăng nhập
        {
          path: 'LoginHistoryList',
          name: 'loginHistoryList',
          component: () => import("@/views/Admin/loginHistory/loginHistoryList.vue"),
        },
        //Danh sách lịch sử đăng nhập cử tri
        {
          path: 'VoterLoginHistoryList',
          name: 'voterLoginHistoryList',
          component: () => import("@/views/Admin/loginHistory/voterLoginHistoryList.vue"),
        },
        //Danh sách lịch sử đăng nhập cán bộ
        {
          path: 'CadreLoginHistoryList',
          name: 'cadreLoginHistoryList',
          component: () => import("@/views/Admin/loginHistory/cadreLoginHistoryList.vue"),
        },
        //Danh sách lịch sử đăng nhập ứng cử viên
        {
          path: 'CandidateLoginHistoryList',
          name: 'candidateLoginHistoryList',
          component: () => import("@/views/Admin/loginHistory/candidateLoginHistoryList.vue"),
        },
        //Danh sách các đơn vị ứng cử
        {
          path: 'ListOfPosition',
          name: 'listOfPosition',
          component: () => import("@/views/Admin/listOfPositions/listOfPosition.vue"),
        },
        //Danh sách các ban
        {
          path: 'Boards',
          name: 'boards',
          component: () => import("@/views/Admin/boards/boards.vue"),
        },
        //Danh sách các tỉnh thành
        {
          path: 'Province',
          name: 'province',
          component: () => import("@/views/Admin/provinces/provinces.vue"),
        },
        //Quận/Huyện
        {
          path: 'District',
          name: 'district',
          component: () => import("@/views/Admin/districts/districts.vue"),
        },
      ]
    }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;