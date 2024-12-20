import { createWebHashHistory, createRouter } from "vue-router";
import Login from '@/views/Login.vue';
import authService from "../services/auth.service";

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
          component: () => import("@/views/Admin/statistical/statistical.vue"),
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
        //Phản hồi cử tri
        {
          path: 'VoterFeedback',
          name: 'voterFeedback',
          component: () => import("@/views/Admin/Feedback/getVoterFeedbackList.vue"),
        },
        //Phản hồi ứng cử viên
        {
          path: 'CandiadateFeedback',
          name: 'candiadateFeedback',
          component: () => import("@/views/Admin/Feedback/getCandidateFeedbackList.vue"),
        },
        //Phản hồi cán bố
        {
          path: 'CadreFeedback',
          name: 'cadreFeedback',
          component: () => import("@/views/Admin/Feedback/getCadreFeedbackList.vue"),
        },
        //Danh sách phiếu bầu theo năm
        {
          path: 'EncryptedVotesBasedOnElectionYear',
          name: 'encryptedVotesBasedOnElectionYear',
          component: () => import("@/views/Admin/votes/GetDetailedInformationAboutEncryptedVotesBasedOnElectionYear.vue"),
        },
        //Danh sách phiếu bầu mã hóa theo thời điểm
        { 
          path: 'EncryptedVotesBasedOnElectionDate',
          name: 'encryptedVotesBasedOnElectionDate',
          component: () => import("@/views/Admin/votes/GetDetailsAboutEncryptedVotesBasedOnElectionDate.vue"),
          props: route =>({ngayBatDauDuocNhan: route.query.ngayBD})
        },
        //Danh sách phiếu bầu giải  mã theo thời điểm
        {
          path: 'GetListOfDecodedVotesBasedOnElectionDate',
          name: 'getListOfDecodedVotesBasedOnElectionDate',
          component: () => import("@/views/Admin/votes/GetListOfDecodedVotesBasedOnElectionDate.vue"),
          props: route => ({ngayBatDauDuocNhan: route.query.ngayBD}),
        },
        //Danh sách chi tiết các cuộc bầu cử diễn ra trong năm
        {
          path: 'GetDetailsListOfElectionBassedOnYear',
          name: 'getDetailsListOfElectionBassedOnYear',
          component: () => import("@/views/Admin/elections/GetDetailsListOfElectionBassedOnYear.vue"),
        },
        //Danh sách cử tri
        {
          path: 'Voters',
          name: 'voters',
          component: () => import("@/views/Admin/voters/voters.vue"),
        },
        //Danh sách ứng cử viên
        {
          path: 'Candidates',
          name: 'candidates',
          component: () => import("@/views/Admin/candidates/candidates.vue"),
        },
        //Danh sách cán bộ
        {
          path: 'Cadres',
          name: 'cadres',
          component: () => import("@/views/Admin/cadres/cadres.vue"),
        },
        //Danh sách chưa tham dự kỳ bầu cử theo đối tượng
        {
          path: 'NavigateToElection',
          name: 'navigateToElection',
          component: () => import("@/views/Admin/elections/NavigateToElection.vue"),
        },
        //Danh sách các hoạt động cán bộ
        {
          path: 'Workplaces',
          name: 'workplaces',
          component: () => import("@/views/Admin/workplaces/workplaces.vue"),
        },
        //Danh sách kết quả bầu cử theo kỳ
        {
          path: '/list-of-elections-result-announced',
          name: 'ListOfElectionsResultAnnounced',
          component: () => import('@/views/Admin/elections/ListOfElectionsResultAnnounced.vue'),
          props: (route) => ({ ngayBD: route.query.ngayBD })
        },
        //Danh sách người dùng chưa bỏ phiếu theo kỳ bầu cử
        {
          path: '/get-list-of-users-who-have-not-voted-by-election',
          name: 'GetListOfUsersWhoHaveNotVotedByElection',
          component: () => import('@/views/Admin/elections/GetListOfUsersWhoHaveNotVotedByElection.vue'),
          props: (route) => ({ ngayBD: route.query.ngayBD })
        }
      ]
    }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const accessToken = authService.getAccessTokenFromCookie();
  const isAuthenticated = accessToken && authService.isTokenValid(accessToken);

  // Redirect to login if trying to access protected route without auth
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
    return;
  }

  // Redirect to admin if already authenticated and trying to access login
  if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'HomeAdmin' });
    return;
  }

  next();
});

export default router;